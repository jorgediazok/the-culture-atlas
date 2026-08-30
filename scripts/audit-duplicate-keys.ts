#!/usr/bin/env -S npx tsx
// Server-renders every illustration component and captures React's own "Encountered two
// children with the same key" warning — the exact class of bug fixed across 12 files in
// commit d5491d2 (components that .map() over a coordinate array and key elements by only
// one field, which collides whenever that field repeats). Rendering with real React instead
// of guessing from source text means zero false positives: if React doesn't warn, the keys
// are genuinely unique for that data.
import { readdirSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import * as React from "react";

const ILLUS_DIR = new URL("../src/illustrations/", import.meta.url);
const SKIP = new Set(["index.ts", "types.ts", "IllustrationFrame.tsx", "emblems.tsx", "palette.ts"]);

function files(): string[] {
  return readdirSync(ILLUS_DIR).filter(
    (f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx") && !SKIP.has(f)
  );
}

async function main() {
  let failures = 0;
  let checked = 0;
  const fileList = files();

  for (const file of fileList) {
    const slug = file.replace(/\.tsx$/, "");
    const mod = await import(new URL(file, ILLUS_DIR).href);
    const registryExportName = Object.keys(mod).find((k) => k.endsWith("Illustrations"));
    if (!registryExportName) {
      console.error(`✗ ${file}: no exported *Illustrations registry found`);
      failures++;
      continue;
    }
    const registry = mod[registryExportName] as Record<string, { component: React.ComponentType<{ accentColor: string }> }>;

    for (const [entryId, def] of Object.entries(registry)) {
      checked++;
      const warnings: string[] = [];
      const originalError = console.error;
      console.error = (...args: unknown[]) => {
        const text = args.map(String).join(" ");
        if (text.includes("same key")) warnings.push(text);
      };
      try {
        renderToStaticMarkup(React.createElement(def.component, { accentColor: "#c97a3d" }));
      } catch (err) {
        failures++;
        console.error = originalError;
        console.error(`✗ ${slug} / ${entryId}: threw while rendering — ${(err as Error).message}`);
        continue;
      }
      console.error = originalError;
      if (warnings.length > 0) {
        failures++;
        console.error(`✗ ${slug} / ${entryId}: duplicate key during render`);
        for (const w of warnings) console.error(`    ${w.split("\n")[0]}`);
      }
    }
  }

  if (failures === 0) {
    console.log(`✓ audit-duplicate-keys: rendered ${checked} illustration components across ${fileList.length} files, no duplicate-key warnings`);
    process.exit(0);
  } else {
    console.error(`\naudit-duplicate-keys: ${failures} component(s) with duplicate-key warnings or render errors`);
    process.exit(1);
  }
}

main();
