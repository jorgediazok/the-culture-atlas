---
name: illustrations
description: Illustration redesign project for The Culture Atlas — standards, gotchas, workflow, and progress tracker for src/illustrations/*.tsx and src/content/*.ts. Load before adding a country, editing any file under src/illustrations/, or touching culture-entry content/emblems.
---

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
half a book page — much bigger than the small ~100×110px cover emblems in
`src/illustrations/emblems.tsx` (a separate system; don't confuse the two).
Emblems need their own pass of scrutiny — see "Emblem-specific gotchas"
below — they are not a solved problem, several shipped-and-seemingly-fine
emblems turned out unreadable once the user actually looked at them.

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

- **Disconnected joints (neck/limb/tail floating away from the body):** when
  a figure is built from more than one path/shape meant to connect (neck to
  body, limb to torso, arm to shoulder, tail to body, shell to head/legs),
  it's easy to write coordinates that nearly-but-don't-quite meet, leaving a
  visible gap where the two pieces should join — the shape reads as
  literally detached, floating a few pixels off the body it's supposed to
  be part of. This bit Niger's `LasUltimasJirafasSalvajesDeAfricaOccidental`
  giraffe (2026-08-23): the neck path's bottom endpoint sat 10px above the
  body ellipse's top edge, so the neck looked severed from the body — caught
  by the user visually, not by any automated check. **Fix pattern:** don't
  just make two paths touch at a shared coordinate — extend the piece being
  attached (the neck, limb, etc.) 15–25 units *into* the interior of the
  piece it attaches to, then draw the attaching piece *first* and the larger
  core shape it joins *second*, so the core shape's opaque fill paints over
  the overlap and cleanly absorbs the seam (including hiding the attaching
  piece's own stroke where it would otherwise cross visibly). A second,
  subtler version of this bug hit Seychelles' Aldabra tortoise shortly after:
  the legs were checked against the shell ellipse's bounding-box edge rather
  than its actual curved boundary, so at the ellipse's sides (where the
  curve rises above the bounding box) the real overlap was only 2–8px
  instead of the intended 15–25px — always check against the true curve/path
  of the shape being joined, not a rough box around it. When a figure has
  multiple joints, check every single one numerically (endpoint coordinates
  of both pieces, and their true geometry at that point) before finishing —
  don't eyeball one and assume the rest are fine.
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
- **Whole-batch regression to "just circles and lines" when adding several
  new countries quickly**: writing 10 illustrations × 5 countries in one push
  (Cameroon, Central African Republic, Chad, Comoros, DR Congo, 2026-08-22)
  silently drifted into a default of "ellipse + one squiggle path" per scene —
  technically 2-4 shapes, but none of them figurative. Concretely: three
  circle-heads-with-no-bodies for a "people talking" scene; elephants as a
  single ellipse blob with a curved line for a trunk (no ears, no legs, no
  head distinct from body — user called this out immediately, "¿te parecen
  elefantes?"); three separate scenes captioned as "musicians playing an
  instrument" that drew the instrument alone with zero human figure. The user
  had to say explicitly "en república centroafricana fallan TODAS" before a
  full rework happened. **Do not let batch size lower the detail bar** — the
  Netherlands/Andorra standard from the top of this file applies identically
  whether it's country #3 or country #103. Concretely, a person or animal
  scene needs an actual body, not a head/blob alone: for repeated human
  figures across many entries, write one small local helper (e.g.
  `function person(x, y, scale, dark, robe) { … }` returning a head circle +
  a trapezoid robe/torso + two curved arms) and call it per figure instead of
  drawing a floating head each time; same idea for a recurring animal (a
  `camel`/`elephant` helper with real anatomy: legs, distinct head, ears,
  trunk/neck, tail) reused with different `x`/`y`/`scale` across a herd.

## Emblem-specific gotchas (learned the hard way, new-countries session)

Emblems live in `src/illustrations/emblems.tsx`, one `EmblemComponent` per
country slug, `viewBox="0 0 100 110"`, rendered at ~140px inside a circular
ring on `CoverPage.tsx`. At that tiny scale, mistakes that are invisible in
a 400×275 illustration become the whole picture:

- **Self-intersecting paths silently render as holes or thin outlines.**
  A single `<path>` built from two curves that wind in *opposite* directions
  toward the same region (e.g. two `Q` curves meant to form a solid
  "hood" shape, or a crescent moon hand-built from two arcs with mismatched
  large-arc/sweep flags) can produce a shape whose fill area evaluates to
  near-zero under the browser's fill-rule, leaving only a stroke-thin
  sliver visible — indistinguishable from "broken" to the user, and *not*
  a caching issue even though it looks like one. This bit Iceland's puffin
  hood (rebuilt as two plain overlapping `<circle>`s) and Turkey's crescent
  moon (rebuilt as two complete non-self-intersecting circles combined via
  `fillRule="evenodd"` — the reliable way to do a boolean "circle minus
  offset circle" subtraction; don't hand-tune a single path's arc flags to
  fake a lune shape, it's very easy to get subtly wrong). If an emblem
  renders as an outline, a sliver, or a hole where a solid shape was
  intended, suspect this before anything else.
- **Soft organic curves collapse into an unreadable blob at this scale;
  bold geometric shapes (triangles, zigzags, angular polygons) survive.**
  Poland's eagle read as a dove until its wings became jagged zigzag
  polygons and the crown became three literal triangles. Wales's dragon
  went through three complete rewrites — a single soft-curved silhouette
  (looked like a cat/crab), a multi-piece body-with-wing-and-tail (still
  unreadable) — before landing on a bold front-facing *head* alone
  (cropped cheek horns + visible teeth), which finally read clearly.
  When a creature/animal emblem isn't landing, try cropping to just its
  single most distinctive feature rendered large, rather than a small
  complete body.
- **Quadrupeds need side profile, not a front-facing symmetric pose.**
  Poland's bison read as a pig/rabbit head-on with two vertical horns
  (the exact bunny-ear anti-pattern from the illustration section above,
  applies equally at emblem scale); rebuilt in side silhouette with the
  bison's characteristic shoulder hump, it read correctly on the first
  redo.
- **"No literal flags" can be overridden by explicit user instruction.**
  The project's standing rule is emblems should never be literal miniature
  flags. Turkey's emblem was deliberately built as a crescent-and-star
  (which *is* the flag) only because the user explicitly asked for exactly
  that after a tulip design didn't read — a one-off exception, not a
  precedent to reuse without being asked.
- **A fixed accent color touching the emblem's own ring background can
  vanish.** `CoverPage.tsx` renders the emblem inside a ring tinted with
  the country's own `accentColor`. Any emblem shape that also uses
  `fill={accentColor}` (or a close relative of it) and touches the
  emblem's outer boundary risks blending into its own backdrop. Prefer a
  fixed, unrelated hex for large boundary-touching shapes, saving
  `accentColor` for small interior details already framed by contrast
  (same rule as the illustration frame, just easier to trigger by
  accident here since the backdrop *is* `accentColor`).
- **When the user says "I still see the old version" after a confirmed
  fix**, check `git log` to confirm the commit actually landed and was
  pushed before assuming it's a live-site cache/deploy-lag issue (most
  likely if they're viewing a deployed URL rather than something you
  control) — but also seriously consider a self-intersecting-path bug
  producing a *visually different but still wrong* result, since from the
  user's side both look like "nothing changed." Rebuilding with a
  structurally different technique (not just tweaked numbers) is a good
  diagnostic either way — if the user then sees a genuinely different
  (if still imperfect) shape, that confirms it was never a caching issue.

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

**All continents were done to the bold standard** (Europe, South America,
North America, Asia, Africa, Oceania) as of 2026-08-16. No countries from
that original pass remain on the old tiny/abstract style.

**New-countries session (2026-08-16/17) — 15 countries added from scratch,
all built to the bold standard from the start** (content + illustrations +
emblem + full 6-point registry wiring, per the workflow below), bringing
the atlas from 84 to 99 countries:
- Balkans: Bosnia and Herzegovina, Montenegro, North Macedonia.
- British Isles: Ireland, Northern Ireland, England, Scotland, Wales.
- Rest of Europe (completing the continent): Poland, Malta, Cyprus,
  Georgia, Portugal, Greece, Turkey.

All screenshotted entry-by-entry and reviewed against `imageAlt`/content
this time (not the "no full pass" policy from the original redesign
project — the user actively reviewed every new-country illustration and
flagged specific bugs, most of which were the same failure patterns
documented above: bunny-ear horns, blob/unclear objects,
background-matching low-contrast fills, big empty canvas space). Emblems
got the most iteration — see "Emblem-specific gotchas" above; Wales's
dragon and Poland's bison/eagle each took 2–3 full rebuilds before landing.
Everything through Turkey is committed and pushed as of the last commit in
this session.

**Middle East session (2026-08-17) — Iraq, Syria, Yemen added from scratch**,
bringing the atlas from 99 to 102 countries, all built to the bold standard
from the start (content + illustrations + emblem + full 6-point registry
wiring). Content leans on ancient Mesopotamia/Levant/South Arabia history
(cuneiform, the Code of Hammurabi, the Ishtar Gate, the House of Wisdom, the
Malwiya spiral minaret, Ugarit's alphabet, Palmyra, Damascus steel, the Marib
Dam/Queen of Sheba, Socotra's dragon blood trees) alongside living culture
(masgouf, the Marsh Arabs' mudhif houses, Iraqi maqam, Aleppo soap, the
Damascene rose, tawle/backgammon, Aghabani embroidery, Sana'a's tower houses,
Shibam, the jambiya dagger, sidr honey, Yemeni silver filigree, saltah) —
deliberately avoiding recent-conflict framing, consistent with how
Iran/Palestine/Turkmenistan were handled earlier. Titles and descriptions
needed a real trim pass to fit the ≤55/≤1000-char limits (see
[[content_length_constraints]]) — nearly every drafted title came in
5–15 chars over on the first pass; budget for that when drafting Middle
East/long-place-name content going forward. Emblems: Iraq is a stepped
ziggurat silhouette (terracotta trapezoids, gold shrine box on top), Syria
is Palmyra's columns and arch (stone columns, gold capitals), Yemen is a
jambiya dagger (curved gold blade, dark sheath, green belt) — all built with
fixed hardcoded colors rather than `accentColor`, following the safer
recent pattern (Turkey/Greece/Cyprus/Malta) that avoids the ring-blending
risk documented in "Emblem-specific gotchas." Passed `tsc`, `eslint`, the
id-matching audit, and a full `rm -rf .next && npm run build` (278 static
paths). Per the standing "no full screenshot pass" policy plus the explicit
user instruction not to Puppeteer-screenshot to self-verify (burns
review credit), no screenshot review was run — the user reviews personally
in the running dev server and names specific entries to fix, same as the
Asia/Africa/Oceania batches. Not yet committed as of the end of this batch.

**Africa session (2026-08-23) — Mauritania, Mauritius, Mozambique, Niger
added from scratch**, bringing the atlas to 195 countries. Built via four
parallel background agents (one per country) instead of sequentially, since
each country is fully self-contained — every agent was restricted to only
creating its two standalone files (`src/content/{slug}.ts`,
`src/illustrations/{slug}.tsx`) and reporting back its emblem code +
`countries.ts` block as text rather than editing shared files itself, to
avoid concurrent-edit races on `src/content/index.ts`,
`src/illustrations/index.ts`, `src/content/countries.ts`, and
`src/illustrations/emblems.tsx`; the main session then merged all four sets
of registry edits into those shared files in one pass afterward. This
worked cleanly with zero conflicts — a viable pattern for future
multi-country batches. Content: Mauritania (Chinguetti's manuscript
libraries, iggawin griots/tidinit/ardin, Sahara salt caravans, Banc
d'Arguin's dolphin-fishermen, Oualata's painted facades, khaima hospitality),
Mauritius (the dodo, sega music/dance, Le Morne Brabant, Aapravasi Ghat,
Chamarel's Seven Coloured Earths, model shipbuilding), Mozambique (timbila
xylophone orchestras, capulana cloth, Island of Mozambique, Makonde mapiko
masks, dhow sailing boats, the Transforming Arms into Art project), Niger
(the last West African wild giraffes near Kouré, Tuareg salt caravans, the
Great Mosque of Agadez, the Agadez Cross, the Wodaabe Gerewol festival, the
Tree of Ténéré) — all avoiding recent conflict/instability framing per the
established policy. Emblems: Mauritania is a camel silhouette on a dune
under a crescent (crescent built via two circles + `fillRule="evenodd"`,
not hand-tuned arc flags), Mauritius is a dodo in side profile, Mozambique
is a stepped timbila xylophone with crossed mallets, Niger is a giraffe in
side profile (checked first that no other emblem among ~180 already used a
giraffe). All four passed `tsc`, `eslint`, the id-matching audit, and a
full `rm -rf .next && npm run build` (390 static paths). Committed
(`b813cc8`) and pushed same session. The giraffe's neck-body gap (see the
new "Disconnected joints" bullet above) was caught by the user right after
and fixed in a follow-up commit (`498b329`).

**Africa session continued (2026-08-23) — Senegal, Seychelles, Sierra
Leone added from scratch**, bringing the atlas to 198 countries, using the
same parallel-background-agent pattern as the Mauritania/Mauritius/
Mozambique/Niger batch above. This round's agent prompts explicitly cited
the giraffe neck-gap bug and required a mandatory numeric joint-overlap
self-check pass over every multi-part figure before finishing (see the
"Disconnected joints" bullet above, added as a direct result of this
batch). It worked: Senegal's agent caught and fixed a ~2px gap in a
drummer's leg-to-torso join, and Seychelles' agent caught and fixed the
bounding-box-vs-true-curve mistake in its Aldabra tortoise's leg overlaps,
both before reporting back rather than shipping first and fixing after.
Content: Senegal (Gorée Island/Door of No Return, laamb wrestling, mbalax/
sabar drumming, teranga hospitality, thieboudienne, the boubou robe, the
Senegambian stone circles, griots and the kora, Lac Rose, Saint-Louis
colonial architecture), Seychelles (the coco de mer palm, Aldabra giant
tortoises, the pink granite boulder beaches, moutya music/dance, Creole
cuisine, La Digue's ox-carts, gingerbread architecture, vanilla, pirogue
boat-building), Sierra Leone (Freetown's founding/Krio identity, Bunce
Island told in the same memorial tone as Togo's Aného and Senegal's Gorée,
the Cotton Tree, Sowei masks, Tacugama chimpanzee sanctuary, gara cloth,
rice culture, palm wine, Fourah Bay College) — Sierra Leone deliberately
avoided the 1991–2002 civil war and "blood diamond" framing entirely, same
policy as other difficult-history countries. Emblems: Senegal is a kora
harp-lute, Seychelles is an Aldabra tortoise in side profile, Sierra Leone
is a stylized Cotton Tree. All three passed `tsc`, `eslint`, the
id-matching audit, and a full `rm -rf .next && npm run build` (198
countries × 2 langs = 396 static country paths). Not committed as of the
end of this batch — awaiting explicit user request to commit.

## Deferred, larger-scope task (explicitly NOT started — user said to wait)

The user's own words (2026-08-15, before the original redesign push began):
"Tengo pendiente algo, pienso dejarlo para despues que ya tengamos todos los
paises." Originally two tasks; the second (redesign every remaining
country's illustrations) is now moot since no countries remain on the old
style — every country, old and newly added, is at the bold standard. Only
one task remains, to pick up once the user explicitly says to start:
1. Expand every country from 10 to 20 culture entries each (some small
   countries may be hard to stretch to 20 — that's expected/accepted).

## Content constraints (unrelated to illustrations, but relevant if adding
entries)

Titles ≤55 chars, descriptions ≤1000 chars (target ~700–850). There's an
existing audit-script pattern for this referenced in prior memory — grep the
conversation history or just write a quick Node one-liner checking
`.length` on every `title`/`description` field per language.

## Quick facts (capital / language / population / currency) — added 2026-08-22

Every country page's cover (`CoverPage.tsx`) can show a small capital/
language/population/currency grid, sourced from `src/content/countries.ts`.
As of 2026-08-22 **all 177 loaded countries have this filled in** — so when
adding a new country going forward, fill it in too, in the same pass as the
rest of `countries.ts`, not as a separate follow-up:

- `population` is a plain `number` on the top-level `Country` object (not
  translated; formatted per-locale at render time via
  `src/i18n/format.ts`'s `formatNumber`).
- `capital`, `language`, `currency` are strings inside each locale's
  `CountryTranslation` (`es`/`en`), e.g.
  `currency: "Euro (€)"` / `currency: "Euro (€)"`,
  `currency: "Dólar estadounidense (USD)"` / `"United States Dollar (USD)"`.
- All four fields are optional on the type (`population?`, `capital?`, …)
  specifically so partially-migrated countries don't break — but
  `CoverPage.tsx` only renders the grid when a country has **all four**, so
  a half-filled country silently shows nothing instead of a broken grid.
  Always fill in all four together, never just one or two.
- Keep values short: the grid has a fixed width and shrinks the value's font
  size automatically past 16/26 characters, but anything much longer than
  Switzerland's `"Alemán, francés, italiano y romanche"` (36 chars) risks a
  third line, which the user explicitly rejected — see `CoverPage.tsx`'s
  `factValueFontSize` and don't fight it by writing longer strings than that.
