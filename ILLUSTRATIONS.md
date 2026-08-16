# Illustration redesign project — continuation notes

This file exists so a fresh Claude Code session can pick up the illustration
redesign work already in progress across "The Culture Atlas" without losing
the standards, gotchas, and progress established over a long prior session.
Read this before touching any file under `src/illustrations/`.

## What this project is

Every country has a `src/content/{slug}.ts` file (10 or 20 culture entries,
ES/EN) and a matching `src/illustrations/{slug}.tsx` file (one React/SVG
component per entry, keyed by the entry's `id`, registered in an
`export const {slug}Illustrations: Record<string, IllustrationDefinition>`
at the bottom). The illustrations render inside `IllustrationFrame.tsx`
(`viewBox="0 0 400 275"`, `preserveAspectRatio="xMidYMid slice"`) at roughly
half a book page — much bigger than the small ~100–128px cover emblems in
`src/illustrations/emblems.tsx` (a separate, already-finished system; don't
confuse the two).

**The problem being fixed:** most countries' illustrations were originally
tiny, abstract, 2–4 shape doodles occupying a ~90×90px corner of the 400×275
canvas — not detailed enough, and often not actually depicting the thing the
text narrates (e.g. Argentina's old "tango" illustration was two parallel
curved lines with no human figures at all).

**The standard we're rewriting every file to:** `src/illustrations/netherlands.tsx`
is the calibration reference (do not modify it) — it was the first file done
well, before the "bold" style below was established, and remains a good
detail-density reference. Andorra's file, redone twice (once to
Netherlands-style detail, then again by the user/linter to an even bolder,
larger-scale version — see its current git history), is the up-to-date scale
reference. Concretely: illustrations should use most of the 400×275 canvas
(roughly x:90–320, y:80–250), 4–9 shapes per scene forming a real recognizable
composition (not a decorative cluster of dots), bold strokes (2–6px), and —
critically — the scene must genuinely depict the specific thing the entry's
`imageAlt` / description narrates, not just be "bigger and more detailed."
When content describes a scene, action, or specific object, build it from
actual figurative silhouettes (human figures, animals, recognizable objects),
not abstract geometry.

## Non-negotiable technical rule: no trig at render time

**Never call `Math.sin`, `Math.cos`, or use `Math.PI` inside a component body
to compute SVG coordinates at render time.** These are not guaranteed
bit-identical across CPU architectures (Vercel server vs. a user's browser),
and any drift causes a React hydration mismatch ("tree hydrated but some
attributes... didn't match"). This bug was found and fixed repeatedly this
session (India's Ashoka Chakra emblem originally; then proactively self-caught
in Argentina's Borges spiral and CineOscar reel holes; then again in three
Luxembourg components and one Italy component that used `Math.cos/sin` for
circular arrangements).

**Fix pattern:** whenever you need points arranged in a circle/hexagon/octagon
(flag stars, wheel spokes, film-reel holes, firework rays), compute the exact
coordinates once (either by hand or with a one-off `node -e '...'` script),
then hardcode them as a literal array with a comment noting they're
precomputed offline. Example already in the codebase (`src/illustrations/luxembourg.tsx`):

```tsx
// Hexagon points around (200,110), radius 34, precomputed offline (0°, 60°, ... 300°).
const EU_STARS_SCHUMAN: [number, number][] = [
  [234, 110], [217, 139.4], [183, 139.4], [166, 110], [183, 80.6], [217, 80.6],
];
```

Rotations via the SVG `transform="rotate(deg cx cy)"` *string* attribute are
fine and were used throughout (e.g. firework bursts, lauburu symbol) — the
browser's renderer applies those deterministically. The banned thing is only
`Math` trig calls inside the JS/TSX itself.

## Other recurring accuracy fixes (apply this level of scrutiny by default)

- **Horse + rider compositions:** a horse silhouette and its rider tend to
  merge into one blob if drawn as two overlapping same-toned shapes. Fix:
  give the horse a distinct elongated body + separately-drawn neck/head
  reaching forward + visible mane + tail + 4 legs in a clear gait, all in one
  dark tone, then draw the rider (head + poncho/torso) sitting on top in the
  page's `accentColor` for contrast. Fixed this way in Argentina's
  `GauchosPampa` and Hungary's `LosJinetesQueLlegaronDesdeLaEstepa`.
- **Horns:** thin near-vertical parallel horn shapes read as bunny ears no
  matter how they're curved. Fix: make them short, thick, and sweep almost
  *sideways* from the base (more horizontal than vertical), breaking the
  "two vertical ovals" silhouette. Fixed this way in Bulgaria's kukeri mask
  and Albania's Skanderbeg helmet — the first attempt at "curve them more"
  was not enough; only widening the horizontal sweep fixed it.
- **Onion domes:** a simple `Q` curve to a point reads as a plain pointed cap,
  not a bulbous onion dome. Fix: bulge outward first, *then* taper to a point
  (`Q out-and-up, Q up-and-in-to-point`). Fixed in Hungary's Great Synagogue
  towers.
- **Low-contrast fill on light `accentColor`:** when a country's `accentColor`
  is itself pale (e.g. `#F5F0E6`), don't reuse literal palette colors that
  happen to equal `accentColor` for supposedly-different elements (e.g.
  Albania's Tirana building stripes originally alternated a literal color
  with `accentColor` itself, and for one entry they were the same hex,
  collapsing two stripes into one visual color). Use only the literal
  palette array when you need N *visually distinct* colors.
- **Vague/generic shapes for a literal object the alt text names:** e.g. a
  sword drawn as just a vertical line + one crossbar reads as a crucifix, not
  a sword. Give it an actual tapered blade polygon, a distinct grip, and a
  pommel circle. Fixed in Kosovo's `ElMitoFundadorDeLaBatallaDe1389`.
- **"People walking/hopping in a row"**: a plain circle head + small rounded
  hump body reads as heads floating over hills, not people in motion. Give
  each figure a proper robed-body silhouette with the hem coming to a point
  at the ground and small leg/foot lines below it, alternating head height to
  convey the motion. Fixed in Luxembourg's `Sprangprozessioun`.
- **Generic blob instead of the object's one defining feature**: a rounded
  lump with no distinguishing silhouette reads as "nothing in particular,"
  even when the alt text names a specific object. Guitars need a waisted
  figure-eight body (acoustic) or pointed double-cutaway horns (electric) —
  a plain round bout with a neck stub reads as nothing. Pointe ballet shoes
  need a flat/blocked toe end plus ribbons crossing up the ankle in an X — a
  plain almond shape reads as a pebble. A rifle needs an angled buttstock
  silhouette plus a trigger-guard loop — two bare diagonal bars read as
  sticks. Fixed this way in Jamaica's `ReggaeBobMarley`, Mexico's `Mariachi`,
  Cuba's `BalletNacionalCuba`, and Costa Rica's `AbolicionDelEjercito`, all
  flagged by the user after the first pass looked plausible in isolation but
  didn't survive being looked at next to the real object.

## Workflow used for every country (repeat this exactly)

1. Read `src/content/{slug}.ts` in full — note every `imageAlt` and enough of
   each `description` to know what the illustration must literally depict.
2. Read the current `src/illustrations/{slug}.tsx` to see the old style and
   confirm the exact `id`-keyed component names to preserve/replace.
3. Rewrite every component at the bold scale described above. Drop any
   `variant: "medallion"` flags in the registry (the new full-scene style
   doesn't need the circular medallion backdrop — plain `{ component: X }` is
   enough now).
4. `npx tsc --noEmit` (run from the repo root — the shell's cwd sometimes
   resets between Bash calls in this environment; prefix with
   `cd /Users/jorgediaz/Developer/the-culture-book &&` if a command fails
   with "command not found" style errors).
5. id-matching audit (content ids must exactly equal illustration registry
   keys) — one-liner:
   ```
   node -e '
   const fs = require("fs");
   const content = fs.readFileSync("src/content/{slug}.ts", "utf8");
   const illus = fs.readFileSync("src/illustrations/{slug}.tsx", "utf8");
   const ids = [...content.matchAll(/id: "([^"]+)"/g)].map(m => m[1]);
   const keys = [...illus.matchAll(/(?:"([a-z0-9-]+)"|(\w+)): \{ component:/g)].map(m => m[1] || m[2]);
   console.log("content ids:", ids.length, "illustration keys:", keys.length);
   console.log("missing:", ids.filter(id => !keys.includes(id)));
   console.log("extra:", keys.filter(k => !ids.includes(k)));
   '
   ```
6. `rm -rf .next && npm run build` — must complete clean. (If it fails with
   `Failed to fetch font file from fonts.gstatic.com`, that's a transient
   network blip unrelated to your changes — just retry the build.)
7. Restart the dev server and screenshot **every single entry** with
   Puppeteer, not just a sample — small compositional bugs (blob horses,
   bunny-ear horns, invisible low-contrast fills) only show up visually:
   ```
   lsof -ti:3000 | xargs -r kill; sleep 1
   nohup npm run dev > /tmp/next-dev.log 2>&1 & disown; sleep 6
   ```
   Puppeteer pattern (save under the session scratchpad, adjust slug/count):
   ```js
   const puppeteer = require("puppeteer-core");
   (async () => {
     const browser = await puppeteer.launch({
       executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
       headless: true,
     });
     const page = await browser.newPage();
     const errors = [];
     page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
     page.on("pageerror", (err) => errors.push(String(err)));
     await page.setViewport({ width: 1200, height: 900 });
     await page.goto("http://localhost:3000/es/{slug}", { waitUntil: "networkidle0" });
     await page.mouse.click(1200 * 0.8, 500); // cover -> entry 1
     await new Promise((r) => setTimeout(r, 800));
     for (let i = 0; i < N; i++) {
       await page.screenshot({ path: `.../scratchpad/xx-page-${i+1}.png` });
       await page.mouse.click(1200 * 0.8, 500); // click-to-flip, desktop
       await new Promise((r) => setTimeout(r, 800));
     }
     console.log("Console errors:", errors.length ? errors : "none");
     await browser.close();
   })().catch((e) => { console.error(e); process.exit(1); });
   ```
   Zero console/pageerror entries confirms no hydration mismatch. Then
   actually look at every screenshot and judge it against the imageAlt text —
   don't just check "did it render."
8. Fix anything that doesn't read clearly or doesn't match the narrated
   content, then re-screenshot just the fixed page(s) to confirm.
9. Only `git add` + `git commit` + `git push` when the user explicitly asks
   for it in that turn — never proactively. (This has been the standing rule
   all session; most recently everything through Russia except one small
   fix landed in one commit, apparently without an explicit request being
   visible in the retained transcript — if in doubt, ask before pushing.)

## Progress tracker

**Rewritten to the bold standard, verified, and committed** (commit
`bbeca26` "fixed other countries ilustrations", plus earlier commits
`c70415e` and `39bf83e`):
Bolivia, Argentina, Austria, Vatican City (incl. a later Swiss Guard halberd
fix), Bulgaria (incl. rose-petal and kukeri-mask fixes), Andorra, Albania,
Germany, San Marino, Spain, Hungary, Italy, Kosovo, Liechtenstein, Luxembourg.

**Rewritten to the bold standard this session — all of South America and
North America** (Argentina and Bolivia were already done above; these are the
remaining countries on each continent). All pass `tsc`, `eslint`, a full
`npm run build`, and the id-matching audit, but — per an explicit user
request this session to stop running the full screenshot-every-entry pass
(it was burning too much review time/credit) — they did **not** get the
step-7 screenshot review. The user is reviewing them personally in the
running dev server at their own pace and naming specific entries to fix.
Four were flagged and fixed this way so far (see the new "generic blob"
bullet above): Jamaica's `ReggaeBobMarley`, Mexico's `Mariachi`, Cuba's
`BalletNacionalCuba`, Costa Rica's `AbolicionDelEjercito`. Expect more
fix requests to come in the same piecemeal way — when one arrives, read the
flagged component, diagnose against the accuracy-fixes checklist above, fix,
`tsc`, and (only if asked to verify) a single targeted screenshot of just
that entry, not a full-country pass.
- South America (10): Brazil, Colombia, Chile, Uruguay, Paraguay, Ecuador,
  Venezuela, Peru, Suriname, Guyana.
- North America (12): Jamaica, Cuba, Canada, United States, Mexico,
  Greenland, Costa Rica, Panama, Belize, Curaçao, Haiti, Trinidad and Tobago.

**In progress / not yet committed:**
- **Russia** — all 20 components rewritten to the bold standard; all 20
  entries screenshotted and reviewed page-by-page. Pages 1–17 confirmed good.
  One fix applied and not yet re-verified: `DedMoroz`'s white beard was
  originally drawn above the head (read as a hat pompom) — moved to a proper
  chin-level beard shape below the face. **Next step: re-screenshot the
  `ded-moroz` entry to confirm the fix, then finish visually reviewing pages
  18, 19, 20** (San Basilio-style multi-dome `KizhiPogost`, `LagoBaikal`,
  `Caviar` — these were written but not yet eyeballed), then run the full
  tsc/build/id-audit sequence one more time before considering Russia done.
- **Spain** — `SanFerminEncierro` (the bull) was flagged by the user on
  2026-08-15 as "no parece un toro". Redesigned (took two passes: the first
  attempt still read as a headless creature because the neck/head path
  stretched thin from the shoulder down to a snout near the ground, with the
  horns rooted at the shoulder instead of on a head; fixed by giving it a
  compact bulging head mass with its own eye/muzzle/jaw, from which the
  lyre-shaped horns emerge) and committed in `64b1653` along with unrelated
  cover-page work from the same session. User confirmed it looks right.
- **Asia — all 17 countries rewritten to the bold standard**: Thailand,
  Vietnam, China, Iran, Palestine, Turkmenistan, North Korea, Nepal,
  Indonesia, Laos, Japan, Myanmar, India, Bangladesh, Pakistan, Mongolia,
  Philippines. All pass `tsc`, `eslint`, and the id-matching audit. Per the
  same standing user instruction as South/North America, no full
  screenshot-every-entry pass was run — the user reviews personally in the
  running dev server and names specific entries to fix. Not yet committed.
- **Africa — all 16 countries rewritten to the bold standard**: Algeria,
  Botswana, Burundi, Cape Verde, Egypt, Eritrea, Ethiopia, Gambia, Ghana,
  Ivory Coast, Kenya, Lesotho, Morocco, South Africa, Uganda, Zimbabwe. All
  pass `tsc` and `eslint` (each fixed for unused-var warnings immediately
  after writing) and the id-matching audit. Same as Asia/Americas, no
  screenshot pass — user reviews personally. Committed.
- **Oceania — all 14 countries rewritten to the bold standard**: Australia,
  New Zealand, Fiji, Kiribati, Marshall Islands, Micronesia, Nauru, New
  Caledonia, Palau, Papua New Guinea, Solomon Islands, Tonga, Tuvalu,
  Vanuatu. All pass `tsc` and `eslint` and the id-matching audit. Australia's
  `Canguros` (kangaroo) was flagged by the user immediately after the first
  pass as not reading as a kangaroo and was redesigned with a clear silhouette
  (thick balancing tail, powerful hind leg/foot extended mid-hop, small
  tucked front paws, upright pointed ears, joey peeking from the pouch) —
  confirmed fixed, see the accuracy-fixes checklist pattern above. One
  Solomon Islands component (`DineroDeConchasDeLangaLanga`) originally used
  `Math.sin` at render time to lay out shell beads along a curve — caught and
  fixed per the no-trig-at-render rule by precomputing the point array
  offline (`SHELL_STRAND_POINTS`). Same no-screenshot-pass policy. Committed.

**All continents are now done to the bold standard** (Europe, South America,
North America, Asia, Africa, Oceania). No countries remain on the old
tiny/abstract style. Next steps are the two deferred larger-scope tasks below,
to be started only when the user explicitly says so.

## Deferred, larger-scope tasks (explicitly NOT started — user said to wait)

The user's own words (2026-08-15, before this illustration push began):
"Tengo pendiente algo, pienso dejarlo para despues que ya tengamos todos los
paises." Two things to only pick up once **all** countries exist and the user
says to start:
1. Expand every country from 10 to 20 culture entries each (some small
   countries may be hard to stretch to 20 — that's expected/accepted).
2. Redesign every remaining country's illustrations to this same standard
   (this file's checklist applies then too).

## Content constraints (unrelated to illustrations, but relevant if adding
entries)

Titles ≤55 chars, descriptions ≤1000 chars (target ~700–850). There's an
existing audit-script pattern for this referenced in prior memory — grep the
conversation history or just write a quick Node one-liner checking
`.length` on every `title`/`description` field per language.
