#!/usr/bin/env node
// Runs every audit script and reports a combined pass/fail summary. Exits non-zero if any
// audit fails, so this is safe to use as a CI gate (see .github/workflows/audit.yml).
import { spawnSync } from "node:child_process";

const AUDITS = [
  { name: "ids", cmd: "node", args: ["scripts/audit-ids.mjs"] },
  { name: "lengths", cmd: "node", args: ["scripts/audit-lengths.mjs"] },
  { name: "duplicate-keys", cmd: "npx", args: ["tsx", "scripts/audit-duplicate-keys.ts"] },
  { name: "contrast", cmd: "node", args: ["scripts/audit-contrast.mjs"] },
];

let failed = 0;

for (const audit of AUDITS) {
  console.log(`\n— audit:${audit.name} —`);
  const result = spawnSync(audit.cmd, audit.args, { stdio: "inherit" });
  if (result.status !== 0) failed++;
}

console.log(`\n${AUDITS.length - failed}/${AUDITS.length} audits passed`);
process.exit(failed === 0 ? 0 : 1);
