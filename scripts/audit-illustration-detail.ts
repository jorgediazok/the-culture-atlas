#!/usr/bin/env -S npx tsx
// Heuristic triage for illustration quality across the whole atlas, without a human looking
// at every one of the ~3000 illustrations. Renders each component with react-dom/server (so
// .map-generated shapes and rotate() transforms are fully evaluated with real numbers, not
// left as JS expressions in the source) and measures how much of the 400x275 canvas the
// resulting shapes actually cover against the project's "bold standard" (roughly x:90-320,
// y:80-250 — see the illustrations skill). This is a triage tool, not a pass/fail gate: a
// low score flags likely under-detailed illustrations to look at, but can't catch semantic
// mismatches (a scene that fills the canvas but doesn't depict what the text describes).
import { readdirSync, readFileSync } from "node:fs";
import { basename } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import * as React from "react";

const CONTENT_DIR = new URL("../src/content/", import.meta.url);
const ILLUS_DIR = new URL("../src/illustrations/", import.meta.url);
const SKIP = new Set(["index.ts", "types.ts", "IllustrationFrame.tsx", "emblems.tsx", "palette.ts"]);

const TARGET_X: [number, number] = [90, 320];
const TARGET_Y: [number, number] = [80, 250];
const MIN_SHAPES = 3;
const MIN_WIDTH_RATIO = 0.45; // fraction of the 230px target width
const MIN_HEIGHT_RATIO = 0.45; // fraction of the 170px target height

function slugToContinent(): Map<string, string> {
  const text = readFileSync(new URL("countries.ts", CONTENT_DIR), "utf8");
  const map = new Map<string, string>();
  const entryRe = /slug:\s*"([^"]+)"[\s\S]*?continent:\s*"([^"]+)"/g;
  let m;
  while ((m = entryRe.exec(text))) map.set(m[1], m[2]);
  return map;
}

function countShapes(markup: string): number {
  const m = markup.match(/<(path|circle|rect|ellipse|polygon|line)\b/g);
  return m ? m.length : 0;
}

type BBox = { minX: number; maxX: number; minY: number; maxY: number; width: number; height: number };

// Walks the rendered SVG markup tag-by-tag. Each element's own width/height/r/rx/ry extends
// its footprint from its anchor point, and a rotate(deg cx cy) transform (now a literal
// string, since rendering evaluated the JS) expands the footprint to the full circle the
// element sweeps through — computed from each corner's Euclidean distance to the rotation
// center, not by simulating the angle, so no Math.sin/cos is needed here either.
function boundingBox(markup: string): BBox | null {
  const numRe = /-?\d+(?:\.\d+)?/g;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const grow = (x: number, y: number) => {
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  };
  const growSweep = (cx: number, cy: number, points: [number, number][]) => {
    const r = Math.max(...points.map(([x, y]) => Math.hypot(x - cx, y - cy)));
    grow(cx - r, cy - r);
    grow(cx + r, cy + r);
  };
  const attrs = (tag: string, names: string[]) => {
    const out: Record<string, number> = {};
    for (const name of names) {
      const m = tag.match(new RegExp(`\\b${name}="(-?[\\d.]+)"`));
      if (m) out[name] = parseFloat(m[1]);
    }
    return out;
  };
  const rotateOf = (tag: string): { deg: number; cx: number; cy: number } | null => {
    const m = tag.match(/transform="rotate\((-?[\d.]+)[ ,]+(-?[\d.]+)[ ,]+(-?[\d.]+)\)"/);
    if (!m) return null;
    return { deg: parseFloat(m[1]), cx: parseFloat(m[2]), cy: parseFloat(m[3]) };
  };

  const tagRe = /<(path|circle|rect|ellipse|line|polygon)\b([^>]*)\/?>/g;
  let m;
  while ((m = tagRe.exec(markup))) {
    const [, tagName, rest] = m;
    const rotate = rotateOf(rest);
    let corners: [number, number][] = [];

    if (tagName === "circle") {
      const { cx, cy, r } = attrs(rest, ["cx", "cy", "r"]);
      if (cx !== undefined && cy !== undefined) {
        const rad = r ?? 0;
        corners = [[cx - rad, cy - rad], [cx + rad, cy + rad], [cx - rad, cy + rad], [cx + rad, cy - rad]];
      }
    } else if (tagName === "ellipse") {
      const { cx, cy, rx, ry } = attrs(rest, ["cx", "cy", "rx", "ry"]);
      if (cx !== undefined && cy !== undefined) {
        const a = rx ?? 0, b = ry ?? 0;
        corners = [[cx - a, cy - b], [cx + a, cy + b], [cx - a, cy + b], [cx + a, cy - b]];
      }
    } else if (tagName === "rect") {
      const { x, y, width, height } = attrs(rest, ["x", "y", "width", "height"]);
      if (x !== undefined && y !== undefined) {
        const w = width ?? 0, h = height ?? 0;
        corners = [[x, y], [x + w, y + h], [x, y + h], [x + w, y]];
      }
    } else if (tagName === "line") {
      const { x1, y1, x2, y2 } = attrs(rest, ["x1", "y1", "x2", "y2"]);
      if (x1 !== undefined) corners = [[x1, y1], [x2, y2]];
    } else {
      const attr = tagName === "path" ? "d" : "points";
      const valueMatch = rest.match(new RegExp(`${attr}="([^"]*)"`));
      if (valueMatch) {
        const nums = [...valueMatch[1].matchAll(numRe)].map((n) => parseFloat(n[0]));
        for (let i = 0; i + 1 < nums.length; i += 2) corners.push([nums[i], nums[i + 1]]);
      }
    }

    if (corners.length === 0) continue;
    if (rotate) growSweep(rotate.cx, rotate.cy, corners);
    else corners.forEach(([x, y]) => grow(x, y));
  }

  if (!isFinite(minX) || !isFinite(maxX) || !isFinite(minY) || !isFinite(maxY)) return null;
  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
}

async function main() {
  const continents = slugToContinent();
  const files = readdirSync(ILLUS_DIR).filter(
    (f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx") && !SKIP.has(f)
  );
  const targetWidth = TARGET_X[1] - TARGET_X[0];
  const targetHeight = TARGET_Y[1] - TARGET_Y[0];

  const flagged: { slug: string; continent: string; entryId: string; reasons: string[] }[] = [];

  for (const file of files) {
    const slug = basename(file, ".tsx");
    const continent = continents.get(slug) ?? "unknown";
    const mod = await import(new URL(file, ILLUS_DIR).href);
    const registryExportName = Object.keys(mod).find((k) => k.endsWith("Illustrations"));
    if (!registryExportName) continue;
    const registry = mod[registryExportName] as Record<string, { component: React.ComponentType<{ accentColor: string }> }>;

    for (const [entryId, def] of Object.entries(registry)) {
      const markup = renderToStaticMarkup(React.createElement(def.component, { accentColor: "#c97a3d" }));
      const shapeCount = countShapes(markup);
      const bbox = boundingBox(markup);
      const reasons: string[] = [];
      if (shapeCount < MIN_SHAPES) reasons.push(`only ${shapeCount} shape(s)`);
      if (bbox) {
        if (bbox.width < targetWidth * MIN_WIDTH_RATIO) reasons.push(`narrow (${Math.round(bbox.width)}px wide)`);
        if (bbox.height < targetHeight * MIN_HEIGHT_RATIO) reasons.push(`short (${Math.round(bbox.height)}px tall)`);
      } else {
        reasons.push("no coordinates found");
      }
      if (reasons.length > 0) flagged.push({ slug, continent, entryId, reasons });
    }
  }

  const byContinent = new Map<string, typeof flagged>();
  for (const f of flagged) {
    if (!byContinent.has(f.continent)) byContinent.set(f.continent, []);
    byContinent.get(f.continent)!.push(f);
  }

  const continentOrder = ["europe", "south-america", "north-america", "asia", "africa", "oceania", "unknown"];
  for (const continent of continentOrder) {
    const items = byContinent.get(continent);
    if (!items || items.length === 0) continue;
    console.log(`\n== ${continent} (${items.length} flagged) ==`);
    for (const { slug, entryId, reasons } of items) {
      console.log(`  ${slug} / ${entryId} — ${reasons.join(", ")}`);
    }
  }

  console.log(`\naudit-illustration-detail: ${flagged.length} suspect component(s) out of ${files.length} country files — triage list, not a pass/fail gate.`);
}

main();
