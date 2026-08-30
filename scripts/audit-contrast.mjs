#!/usr/bin/env node
// Audits that every style object which sets a background to an entry/country's accentColor
// also derives its text color from readableTextColor() rather than a hardcoded value. This is
// the exact bug class fixed in PageSpread.tsx: 346 of 3096 entries had invisible white-on-pale
// chip text because the text color was hardcoded instead of computed from accentColor.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src/components", "src/app"];

function tsxFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...tsxFiles(full));
    else if (entry.endsWith(".tsx")) out.push(full);
  }
  return out;
}

// Given the file text and the index of a `backgroundColor:` match, expands outward to find
// the enclosing `{ ... }` object literal (the style/sx object), via brace counting.
function enclosingObject(text, atIndex) {
  let start = atIndex;
  let depth = 0;
  while (start > 0) {
    if (text[start] === "}") depth++;
    else if (text[start] === "{") {
      if (depth === 0) break;
      depth--;
    }
    start--;
  }
  let end = atIndex;
  depth = 0;
  while (end < text.length) {
    if (text[end] === "{") depth++;
    else if (text[end] === "}") {
      depth--;
      if (depth === 0) break;
    }
    end++;
  }
  return text.slice(start, end + 1);
}

let flagged = 0;
let checked = 0;

for (const root of ROOTS) {
  for (const file of tsxFiles(root)) {
    const text = readFileSync(file, "utf8");
    const readableTextColorVars = new Set(
      [...text.matchAll(/const\s+(\w+)\s*=\s*readableTextColor\(/g)].map((m) => m[1])
    );

    const bgRe = /backgroundColor:\s*([^\n,}]*accentColor[^\n,}]*)[,\n]/g;
    let m;
    while ((m = bgRe.exec(text))) {
      checked++;
      const obj = enclosingObject(text, m.index);
      const colorMatch = obj.match(/(?<!background)color:\s*([^\n,}]+)[,\n}]/);
      if (!colorMatch) continue; // no paired text color in this object — nothing to check

      const colorExpr = colorMatch[1].trim();
      const isSafe =
        colorExpr.includes("readableTextColor(") ||
        [...readableTextColorVars].some((v) => new RegExp(`\\b${v}\\b`).test(colorExpr));

      if (!isSafe) {
        flagged++;
        const line = text.slice(0, m.index).split("\n").length;
        console.error(
          `✗ ${file}:${line}  backgroundColor: ${m[1].trim()}  paired with color: ${colorExpr}  — not derived from readableTextColor()`
        );
      }
    }
  }
}

if (flagged === 0) {
  console.log(`✓ audit-contrast: checked ${checked} accentColor background(s), every paired text color is derived from readableTextColor()`);
  process.exit(0);
} else {
  console.error(`\naudit-contrast: ${flagged} of ${checked} accentColor background(s) pair with a hardcoded (non-contrast-safe) text color`);
  process.exit(1);
}
