#!/usr/bin/env node
// Audits that every src/content/{slug}.ts entry id has a matching key in the
// same country's src/illustrations/{slug}.tsx registry, and vice versa.
// This is the exact id-matching check that was previously run by hand as a
// one-off `node -e` per country during the illustration redesign project.
import { readFileSync, readdirSync } from "node:fs";
import { basename } from "node:path";

const CONTENT_DIR = new URL("../src/content/", import.meta.url);
const ILLUS_DIR = new URL("../src/illustrations/", import.meta.url);
const SKIP = new Set(["index.ts", "types.ts", "countries.ts"]);

function slugs() {
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts") && !SKIP.has(f))
    .map((f) => basename(f, ".ts"));
}

function contentIds(slug) {
  const text = readFileSync(new URL(`${slug}.ts`, CONTENT_DIR), "utf8");
  return [...text.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function illustrationKeys(slug) {
  const path = new URL(`${slug}.tsx`, ILLUS_DIR);
  let text;
  try {
    text = readFileSync(path, "utf8");
  } catch {
    return null; // missing file entirely — reported separately
  }
  // Registry lines look like `foo: { component: X }` or `"foo-bar": { component: X }`,
  // always immediately followed by `{ component:`.
  return [...text.matchAll(/^\s*(?:"([a-z0-9-]+)"|([a-zA-Z0-9_]+)):\s*\{\s*component:/gm)].map(
    (m) => m[1] || m[2]
  );
}

let failures = 0;
const allSlugs = slugs();

for (const slug of allSlugs) {
  const ids = contentIds(slug);
  const keys = illustrationKeys(slug);

  if (keys === null) {
    console.error(`✗ ${slug}: no matching src/illustrations/${slug}.tsx file`);
    failures++;
    continue;
  }

  const idSet = new Set(ids);
  const keySet = new Set(keys);
  const missing = ids.filter((id) => !keySet.has(id));
  const extra = keys.filter((k) => !idSet.has(k));

  const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  const dupKeys = keys.filter((k, i) => keys.indexOf(k) !== i);

  if (missing.length || extra.length || dupIds.length || dupKeys.length) {
    failures++;
    console.error(`✗ ${slug}: content ids=${ids.length}, illustration keys=${keys.length}`);
    if (missing.length) console.error(`    missing illustration for ids: ${[...new Set(missing)].join(", ")}`);
    if (extra.length) console.error(`    illustration keys with no content entry: ${[...new Set(extra)].join(", ")}`);
    if (dupIds.length) console.error(`    duplicate ids in content: ${[...new Set(dupIds)].join(", ")}`);
    if (dupKeys.length) console.error(`    duplicate keys in illustration registry: ${[...new Set(dupKeys)].join(", ")}`);
  }
}

if (failures === 0) {
  console.log(`✓ audit-ids: ${allSlugs.length} countries, content ids match illustration registry keys everywhere`);
  process.exit(0);
} else {
  console.error(`\naudit-ids: ${failures} of ${allSlugs.length} countries have a mismatch`);
  process.exit(1);
}
