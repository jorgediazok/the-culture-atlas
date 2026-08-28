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
countries × 2 langs = 396 static country paths). Committed (`d956262`) and
pushed same session.

**Africa completed (2026-08-23) — Nigeria, Rwanda, São Tomé and Príncipe
added from scratch**, bringing the atlas to 201 countries and completing
all 54 African countries. Same parallel-background-agent pattern as the
prior two batches. **New failure mode encountered and recovered from:**
all three agents hit the session's API usage limit mid-task (a
"You've hit your session limit" error, unrelated to the illustration work
itself) and were killed before finishing. Recovery: checked file
timestamps/content directly rather than trusting the last status message —
one file (`sao-tome-and-principe.tsx`) had a real syntax error (a missing
closing paren) from being cut off mid-edit, fixed by hand; one country's
(Nigeria) illustration file had two of three joint-overlap fixes the agent
had identified but not yet applied (a horn floating 3.6px from a mouth, and
bridge piers floating ~10px below a bridge deck because their y-coordinates
didn't account for the deck's quadratic-Bezier curve at that x — computed
the true curve position and fixed both by hand); Sao Tomé's content also
had 16 of 20 descriptions between 851–955 chars, over the 850 soft target
though under the 1000 hard cap, trimmed down by hand. None of the three
agents had sent their final report (emblem code + countries.ts block)
before being cut off — recovered by using `SendMessage` to the dead
agents' own `agentId`s once the rate limit window had passed (per
`ListAgents`' resume note, sending a message to a completed/failed agent
resumes it from its transcript with full context); all three picked back
up and produced their final emblem/countries.ts blocks without needing to
redo any actual content or illustration work. **Lesson: when a background
agent's status shows `failed` due to a session/rate limit rather than a
real task error, don't assume the work is lost or start over — check what
files it already wrote (agents write files directly, not just at the end),
verify/fix them directly, and try resuming the agent via SendMessage to
its agentId to recover any remaining output (like a final report) once the
limit window has passed.** Content: Nigeria (Nollywood, Fela Kuti's
Afrobeat and the global Afrobeats wave, the Benin Bronzes, Yoruba adire
indigo cloth, Igbo mmanwu masquerade, jollof rice, northern durbar
festivals, Lagos, the dundun talking drum, Zuma Rock), Rwanda (mountain
gorilla trekking in Volcanoes National Park, umuganda community service
day, imigongo cow-dung geometric art, Intore royal dance, agaseke peace
baskets, high-altitude coffee, the Nyungwe canopy walkway, Kigali's
plastic-bag ban, royal ingoma drums, banana beer), São Tomé and Príncipe
(the roça cocoa-plantation manors, Pico Cão Grande's volcanic spire, the
equator crossing Ilhéu das Rolas, Tchiloli folk theater, Obô Natural
Park's endemic birds, calulu stew, ússua/socopé dance, colorful pirogues,
São Tomé's colonial old town, today's shade-grown single-origin cocoa) —
Rwanda's content deliberately excluded any mention of the 1994 genocide
entirely (a harder line than the "respectful memorial" treatment used for
older histories like Gorée or Bunce Island, given how recent and sensitive
it is). Emblems: Nigeria is a Benin Bronze-style cast head, Rwanda is a
mountain gorilla cropped to just its head (per the Wales-dragon lesson:
crop to the single most distinctive feature at this tiny scale), São Tomé
and Príncipe is Pico Cão Grande's rock spire over green hills. All three
passed `tsc`, `eslint`, the id-matching audit, and a full
`rm -rf .next && npm run build` (201 countries × 2 langs = 402 static
country paths). Committed (`1f59214`) and pushed same session — that
commit also fixed the two Nigeria joint-overlap gaps a background agent
had identified but not applied before being cut off (see below), and
redesigned the São Tomé and Príncipe emblem after the user flagged that
the original spire-over-hills design read unintentionally suggestive;
replaced with an open cacao pod showing beans, tying to the country's
cocoa content instead.

**Recurring new failure mode across this whole session: background agents
hitting the account's API session-usage limit mid-task** (a
"You've hit your session limit · resets HH:MMpm" error — nothing to do
with the illustration work itself). This hit 3 of 4 agents in the Nigeria/
Rwanda/São Tomé batch and 3 of 4 in the Somalia/Faroe/Aruba/Sint Maarten
batch below. **Recovery procedure that worked reliably both times:**
(1) check wall-clock time against the error's stated reset time before
doing anything else; (2) do NOT trust the agent's last status message as
the final state — check the actual files it wrote directly (`ls -la` for
timestamps, then read/tsc/eslint/audit them), since agents write files
throughout the task, not just at the end; (3) fix anything broken or
left half-done directly by hand (a cut-off mid-edit can leave a syntax
error; a self-check that found a problem right as it was interrupted may
not have had time to apply the fix — always re-derive the specific
numeric claim, like a joint's true overlap distance, rather than assuming
the agent's diagnosis-in-progress was both correct and applied); (4) once
past the reset time, resume the dead agent via `SendMessage` to its
`agentId` (works even after a `failed` status — resuming pulls its full
transcript context back), and ask specifically for the pieces never
delivered (the emblem code + `countries.ts` block, in this project's
pattern) rather than having it redo already-verified work. This recovered
full context-aware output from every interrupted agent without repeating
any actual content/illustration work. One wrinkle: an agent can
misremember whether a message actually reached the coordinator before the
cutoff (Aruba's agent claimed "sent above in the prior message" for
content that had in fact never arrived) — if a deliverable is missing,
just ask again plainly rather than assuming it exists somewhere.

**Scope decision (2026-08-23): which non-sovereign-but-culturally-distinct
territories to include.** After finishing Africa, the user asked whether
it was "correct" to include entries like Kosovo, the four constituent
countries of the UK, Greenland, Curaçao, and New Caledonia — entities
included in the atlas alongside full UN member states because they have
genuinely distinct cultures from their parent country, even though they
aren't sovereign. Given the choice of how far to extend that criterion
(offered as options: just the direct siblings of what's already included,
siblings plus other iconic non-sovereign territories like Hong Kong/Macau/
French Polynesia/Puerto Rico, or freeze the extra list as-is), **the user
chose the narrowest option: only add the direct siblings of territories
already in the atlas** — Faroe Islands (Denmark, sibling of Greenland),
Aruba and Sint Maarten (Kingdom of the Netherlands, siblings of Curaçao).
Hong Kong, Macau, French Polynesia, and Puerto Rico were discussed but
explicitly NOT added — don't add them without the user revisiting this
decision. Separately, Israel was proposed (as one of only two UN member
states missing from the entire atlas, alongside Somalia) but the user
said explicitly **"No hagas Israel, borralo"** — do not add Israel, full
stop; this was specifically because of the difficulty of neutrally
labeling its capital (Jerusalem vs. Tel Aviv is genuinely disputed, unlike
any other country in the atlas) — don't revisit this unless the user
raises it again themselves.

**Somalia, Faroe Islands, Aruba, and Sint Maarten added from scratch
(2026-08-23)**, bringing the atlas to 205 countries/territories, completing
Somalia as Africa's last missing country. Same parallel-background-agent
pattern, same standalone-files-only restriction to avoid shared-file
conflicts. Somalia's content deliberately excluded the 1991–present civil
war, state collapse, Al-Shabaab, and piracy entirely (same hard-line
treatment as Rwanda's genocide exclusion), focusing instead on the ancient
Land of Punt frankincense/myrrh trade, Laas Geel's Neolithic rock art,
the Somali oral-poetry tradition ("nation of poets"), the world's largest
camel population, the portable aqal nomadic hut, the Osmanya script, xeer
customary law, and shaah tea. A real joint-overlap bug was caught by the
agent's own final self-check right as it got cut off by the session limit
(a Laas Geel cow's horn starting ~1 unit outside the head shape's true
boundary) — recovered and fixed per the procedure above. Faroe Islands
covered turf-roofed houses, Ólavsøka, the medieval chain dance, puffin
fleyging, wool/sheep culture, the Sørvágsvatn "floating lake" illusion,
skerpikjøt fermented lamb, and — handled factually and even-handedly on
both sides, like Spain's San Fermín bull-running elsewhere in the atlas —
grindadráp, the traditional pilot-whale drive hunt; its own agent caught
and fixed two real joint bugs (a turf-house roof with an actual unfilled
gap plus an off-center chimney, and a whale dorsal fin sitting almost
exactly on its body's boundary curve with ~0.02 units of margin). Aruba
covered the wind-bent divi-divi tree, Papiamento, Carnival, Arikok's
desert landscape, its historic aloe vera export trade, Arawak petroglyphs,
and windsurfing; its agent caught and fixed four real joint bugs (a
windsurfer board drawn on top of and hiding the rider entirely — a
draw-order bug, not just a gap; the same windsurfer's mast floating 10
units above the board; carnival dancer legs/robe with only ~1 unit of
overlap plus a color mismatch between one dancer's arm and robe; an aloe
rosette whose most-rotated leaves lost overlap at extreme angles because
rotation was computed around the group origin instead of the hub's own
center — a new failure sub-pattern worth watching for). Sint Maarten
covered the peaceful two-nation single-island split (Treaty of Concordia),
Maho Beach's low-flying jets, Carnival, guavaberry liqueur, and Simpson
Bay Lagoon; its agent fixed a sea turtle's flipper/tail joints using the
same true-curve-not-bounding-box method as the Seychelles tortoise lesson,
and built the jet-plane emblem/illustration as a single continuous
non-self-intersecting outline specifically to sidestep the joint-seam
failure mode rather than assembling it from separate pieces — a good
general technique worth reusing for other rigid mechanical objects.
Emblems: Somalia is a frankincense/myrrh branch (a camel was the first
instinct but Mauritania already uses one), Faroe Islands is a puffin in
side profile, Aruba is the wind-bent divi-divi tree, Sint Maarten is a jet
over a beach referencing Maho Beach. All four passed `tsc`, `eslint`, the
id-matching audit, and a full `rm -rf .next && npm run build` (205
countries/territories × 2 langs = 410 static country paths). Not committed
as of the end of this batch — awaiting explicit user request to commit.

## Story-count expansion task (in progress, started 2026-08-23)

The user's own words (2026-08-15, before the original redesign push began):
"Tengo pendiente algo, pienso dejarlo para despues que ya tengamos todos los
paises." Originally two tasks; the second (redesign every remaining
country's illustrations) is now moot since no countries remain on the old
style — every country, old and newly added, is at the bold standard. The
one remaining task — expanding every country's story count — started once
all 205 countries/territories were added (2026-08-23).

**Tier system decided with the user (2026-08-23):** instead of a flat "20
for everyone" target, countries are sorted into three tiers based on
population/history/cultural depth, decided per-country by judgment, not a
fixed rule:
- **20 entries** — major countries with deep history/culture, regardless of
  population (explicit user examples: United States, Canada, Belgium,
  Austria, Australia, New Zealand).
- **15 entries** — mid-sized countries with solid but less extensive
  material (explicit user example: Moldova).
- **12 entries** — small countries or ones with genuinely limited unique
  material to draw on (explicit user examples: Tuvalu and other small
  Oceania nations).
Already-complete-at-20 countries from the original redesign (France,
Germany, Italy, Netherlands, Belgium, Switzerland, Russia, Argentina,
Croatia, Luxembourg, Albania) count as done for their tier and don't need
rework. When expanding a country, read its existing entries first to avoid
duplicating topics, then add new entries with unique ids continuing the
`order` sequence, following the exact content workflow in the "Content
constraints" section below and the illustration standards from the top of
this file (bold style, no-trig rule, joint-overlap checks) for every new
entry's component.

**South America — done and committed (2026-08-23, commit `0c1405d`):** all
12 South American countries now match the tier system: Brazil, Colombia,
Peru, Chile → 20 (Argentina was already 20); Venezuela, Ecuador, Bolivia,
Paraguay, Uruguay → 15; Guyana, Suriname → 12. The first 4 (Brazil/
Colombia/Peru/Chile) were done via 4 parallel background agents, each
scoped to only its own `src/content/{slug}.ts` and
`src/illustrations/{slug}.tsx` files (same no-shared-file-conflict pattern
as the new-country batches). After the user asked to cut down on
background-agent usage for cost reasons, the remaining 7 countries
(Venezuela through Suriname) were done directly in the main session with
no subagents — slower per country but no duplicated-context overhead. All
11 expanded countries passed `tsc`, `eslint`, the id-matching audit, the
title/description length check, and a final full
`rm -rf .next && npm run build` (410 static paths, 205 countries × 2
langs) before committing.

**North America — 12-tier countries done and committed (2026-08-24):** all
16 small-tier North American/Caribbean countries expanded from 10 to 12
entries each, done entirely in the main session with no subagents (per the
established cost-minimization preference): Honduras, El Salvador,
Nicaragua, Belize, Bahamas, Barbados, Saint Lucia, Saint Kitts and Nevis,
Antigua and Barbuda, Dominica, Grenada, Saint Vincent and the Grenadines,
Greenland, Curaçao, Aruba, Sint Maarten. Tier assignment for all 27 North
American countries was proposed to and approved by the user before writing
any content: 20 (United States, Canada, Mexico), 15 (Cuba, Jamaica, Haiti,
Dominican Republic, Guatemala, Costa Rica, Panama, Trinidad and Tobago),
12 (the 16 listed above). Each country's 2 new entries were picked to avoid
duplicating existing topics (read all 10 existing entries first), covering
a mix of history/independence, craft/food, music, and nature/landmark
topics per country. All illustrations followed the joint-overlap and
no-trig rules from the top of this file. **A description-length regression
was caught this batch**: roughly half of the ~64 new descriptions (32
entries × 2 languages) initially came in over the 1000-char hard cap —
up to 1150 chars — because writing rich, fact-dense descriptions for
history/independence entries (treaties, dates, flag symbolism, named
figures) runs long by default; none of the shorter titles were affected.
Caught by a Node length-audit script run after all 16 countries were
written, then fixed by trimming every flagged description (cutting
redundant clauses, not just rewording) until a final audit pass showed
zero over 1000. **Lesson: run the length audit incrementally (e.g. every
4-5 countries) rather than only at the very end** — batching the fix
across 17+ descriptions at once cost more back-and-forth than catching
a couple of over-length entries per country as they're written would
have. All 16 countries passed `tsc`, `eslint` (only 2 pre-existing
unrelated unused-var warnings in old Dominica/Greenland code, not touched
this batch), the id-matching audit, and a final full
`rm -rf .next && npm run build` (410 static paths, 205 countries × 2
langs). Committed and pushed same session.

**North America — 20-tier countries done and committed (2026-08-24, commit
`82fb0c0`):** United States, Canada, and Mexico all expanded from 10 to 20
entries, via 3 parallel background agents (one per country, same
standalone-files-only restriction as the South America Brazil/Colombia/
Peru/Chile precedent — each agent touched only its own
`src/content/{slug}.ts` and `src/illustrations/{slug}.tsx`, no shared-file
edits needed since these are existing countries, not new ones). All three
agents self-caught and fixed real joint-overlap bugs before reporting back
(Canada: a floating inuit throat-singing "clasped arms" arc that measured
as not touching either figure's torso; Mexico: a turkey neck-base point
only 1.9 units inside its body ellipse, horse-leg attachments as shallow as
6.6 units, both widened to the 15-25 unit standard by numeric script
rather than eyeballing). US content picked deliberately specific topics
(Navajo Nation/Diné by name rather than generic "Native Americans"; Civil
Rights Movement handled factually, no partisan framing); Mexico avoided
narco/cartel framing entirely, consistent with project policy. US had 5 of
20 new descriptions initially over the 1000-char cap (up to 1097), trimmed
before reporting. All three countries passed `tsc`, `eslint`, the
id-matching audit (20/20 each), the length audit, and a final full
`rm -rf .next && npm run build` (420 static paths, 205 countries/
territories × 2 langs + misc). Committed and pushed same session.

**North America — 15-tier countries done and committed (2026-08-24):** all
8 remaining North American/Caribbean countries expanded from 10 to 15
entries each — Cuba, Jamaica, Haiti, Dominican Republic, Guatemala, Costa
Rica, Panama, Trinidad and Tobago — via 8 parallel background agents (one
per country, same standalone-files-only restriction as prior batches).
This completes the North America tier expansion: all 27 North American
countries/territories now match their assigned tier (20/15/12). Haiti and
Guatemala's content avoided civil-war/genocide-era framing entirely, same
policy as Rwanda/Sierra Leone/Somalia; Panama's Darién Gap content (where
touched) stayed purely geographic/ecological, avoiding migration-politics
framing. Every agent ran a numeric joint-overlap self-check before
reporting back, and real bugs were caught and fixed this way in most of
the 8: Cuba (a coffee cup resting on its saucer with only ~4 units of true
overlap against the saucer's actual curve, not its bounding box — widened
to ~15-16), Jamaica (Jonkonnu mask ribbons overlapping the head ellipse by
only ~8 units at the outer ribbons once checked against the true elliptical
boundary per-x rather than at the ellipse's center, plus thin bone-stick
and cricket-bail overlaps), Haiti (a crescent moon built from two circles
whose `evenodd` cutout wasn't fully contained within the main circle,
which would have rendered a stray floating blob; rebuilt with a correctly
contained cutout satisfying the `d ≤ R_A − R_B` condition), Dominican
Republic (two palm-tree canopy hubs sized right at the 15-unit minimum,
widened for margin) and a length-audit regression (4 of 30 new
title/description strings over the 1000-char cap, up to 1106 chars,
trimmed). Costa Rica's agent also caught a near-miss on a hand-painted
zigzag band whose stroke could have poked just outside a pottery vessel's
true bezier silhouette (not a joint bug, but the same
true-curve-not-bounding-box discipline). Guatemala, Panama, and Trinidad
and Tobago's self-checks found no bugs needing correction — their
coordinates were derived from the overlap targets up front. After all 8
agents finished, the main session ran the combined verification directly:
`tsc --noEmit`, `eslint` across all 16 files (0 errors; the 2 pre-existing
unrelated warnings in Panama's older `CascoViejoSkyline`/`RanaDorada` code
remain, as flagged by that agent), an id-matching audit (15/15 for all 8,
zero missing/extra/duplicate), a length audit (all 8 countries' 30
titles/30 descriptions per country within the ≤55/≤1000 caps — Dominican
Republic's longest description landed exactly at 1000), and a final full
`rm -rf .next && npm run build` (420 static paths, unchanged from the
20-tier batch since no new countries were registered, just existing ones
expanded). Not yet committed as of the end of this batch — awaiting
explicit user request to commit.

**Oceania — done and committed (2026-08-24):** all 14 Oceania countries/
territories now match the tier system, expanded entirely in the main
session with no subagents (the user explicitly asked to stop using
background agents this batch for cost reasons — "no corras agentes por
separado... me está comiendo todos los creditos de la semana rapidisimo").
Tier assignment was proposed by the assistant and approved by the user
before writing any content: 20 (Australia, New Zealand — both already
confirmed as explicit 20-tier examples from the original tier-system
conversation), 15 (Papua New Guinea, Fiji, Vanuatu, Tonga, Solomon
Islands), 12 (Kiribati, Marshall Islands, Micronesia, Nauru, New
Caledonia, Palau, Tuvalu). Order of work: the seven 12-tier countries
first (2 new entries each), then the five 15-tier countries (5 new
entries each), then Australia and New Zealand last (10 new entries each)
since they were the largest lift. Each country's new entries were picked
to avoid duplicating existing topics (read all existing entries first)
and to keep the same figurative, no-trig, joint-overlap-checked
illustration standard as the rest of the atlas — new techniques used this
batch: a zigzag/polygon path for a spiky pufferfish-skin helmet
(Kiribati's te mataana armor) and for a multi-point star burst (Marshall
Islands' and Nauru's flag illustrations), built the same way as
Luxembourg's earlier hexagon-star pattern (literal hand-picked points,
no `Math.sin/cos`). **A recurring length-audit miss this batch**: the
regex used to check title length (`/title: "([^"]*)"/`) without a `\b`
word-boundary anchor also matches inside `subtitle: "..."`, since
"subtitle" contains the substring "title" — this produced a false "56
titles" count instead of 24 early in the batch and, worse, meant the
*real* over-length description flagged by a loose description regex
sometimes wasn't the entry actually fixed on the first pass (fixed the
wrong entry's title/description more than once before adding `\btitle:`
to the regex and rechecking which description index was actually over).
**Lesson: always anchor the title regex with `\b` and, when multiple
descriptions are flagged over 1000 chars, print each flagged one's index
and a text preview before editing — don't assume the correction target
without confirming which specific entry the flagged length belongs to.**
All 14 countries/territories passed `tsc --noEmit`, `eslint` (fixed two
unused-`dark`-variable warnings introduced by illustrations that ended up
not needing the shaded color), the id-matching audit (all countries'
content ids exactly match illustration registry keys), the title/
description length audit (all ≤55/≤1000 after the fixes above), and a
final full `rm -rf .next && npm run build` (420 static paths, unchanged
from the North America batches since no new countries were registered,
just existing ones expanded). This completes Oceania — every country in
the continent is now at its assigned tier.

**Europe — tier assignment approved and 12-tier countries done and
committed (2026-08-24):** the user approved a tier proposal for all 42
European countries/territories not already at 20 (10 already-done
countries — Netherlands, Belgium, Switzerland, France, Croatia,
Luxembourg, Albania, Italy, Russia, Germany — were excluded from the
count): 20 (Spain, Poland, Sweden, Austria, Greece, Portugal, Turkey,
England, Ukraine, Hungary), 15 (Denmark, Norway, Finland, Czech Republic,
Romania, Serbia, Bulgaria, Ireland, Scotland, Georgia, Iceland, Moldova,
Belarus, Malta, Cyprus, Estonia, Latvia, Lithuania), 12 (Slovakia,
Slovenia, Monaco, Andorra, San Marino, Vatican City, Liechtenstein,
Kosovo, Bosnia and Herzegovina, Montenegro, North Macedonia, Wales,
Northern Ireland, Faroe Islands). Per explicit user instruction this
batch, **no background agents were used at all** — every one of the 14
12-tier countries was expanded directly in the main session,
country-by-country, slower but avoiding the per-agent cost multiplier.
Each country got 2 new entries (10→12), picked to avoid duplicating
existing topics (read all 10 first) and, where a country's history
touched war/conflict (Kosovo, Bosnia and Herzegovina, Montenegro, North
Macedonia), new entries deliberately picked non-conflict angles (language
codification, folk costume, coppersmith crafts, primeval forests, ancient
observatories, mask carnivals, printing history) consistent with the
project's standing policy on difficult-history countries. Illustrations
matched each file's own established style rather than a single uniform
look — some existing files (Andorra, San Marino) use a bolder,
few-large-shapes style with code comments explaining joint overlaps;
others (Slovakia, Slovenia, Monaco, Vatican City, Liechtenstein, Kosovo,
Bosnia and Herzegovina, Montenegro, North Macedonia, Wales, Northern
Ireland, Faroe Islands) use a denser tint/shade palette style; Faroe
Islands already had reusable `person`/`sheep`/`puffin`/`whale`/`turfHouse`
helper functions with joint math worked out, which the two new
Faroe entries (a footballer, a chain of light-art figures in an undersea
roundabout) reused directly rather than duplicating. A batch length-audit
run after all 14 countries (using a `\btitle:` -anchored regex per the
Oceania-batch lesson above) caught 12 titles over the 55-char cap — all
in the 2 newest entries per country, none in the original 10 — trimmed in
one pass. All 14 countries passed `tsc --noEmit`, `eslint` (one
pre-existing unrelated warning in Andorra's older
`UnicoPaisConElCatalanComoIdiomaOficial` component, not touched this
batch), the id-matching audit (12/12 for all 14), the length audit (all
168 entries' titles/descriptions within ≤55/≤1000 after the trim), and
two full `rm -rf .next && npm run build` runs (one at the halfway point,
one at the end — both clean, 420 static paths throughout since these are
all existing countries being expanded, not new registrations).

**Europe — 15-tier and 20-tier countries done and committed (2026-08-28):**
completing the Europe phase. The 15-tier batch (18 countries: Denmark,
Norway, Finland, Czech Republic, Romania, Serbia, Bulgaria, Ireland,
Scotland, Georgia, Iceland, Moldova, Belarus, Malta, Cyprus, Estonia,
Latvia, Lithuania) and the 20-tier batch (10 countries: Spain, Poland,
Sweden, Austria, Greece, Portugal, Turkey, England, Ukraine, Hungary)
were both expanded directly in the main session, country-by-country, per
the same no-background-agents instruction as the 12-tier batch. Romania
and Serbia needed a full illustration rewrite (old pre-redesign style
found mid-batch — user chose "rebuild all 10 old + add 5 new, all bold"
over leaving the old 10 as-is); a Python coordinate-range heuristic
script confirmed all other 15-tier files were already bold-style, so no
further rewrites were needed. Every country in both batches passed
`tsc --noEmit`, the id-matching audit, `eslint`, and a title/description
length audit (≤55/≤1000, target ~700-850 for descriptions) before commit,
with periodic full `rm -rf .next && npm run build` checkpoints throughout
(420 static paths each time, unchanged since these are all existing
countries being expanded, not new registrations). **Europe's 20/15/12
tiered expansion is now fully complete** — every country/territory in
the continent is at its assigned tier.

**Next up:** Asia and Africa still need their own tier assignments
proposed to and approved by the user before the same expansion workflow
can begin. Per the established cost-management pattern, consider
starting a fresh chat for that next phase — and per the explicit
instruction carried through the whole Europe phase, continue doing the
expansion directly in the main session without background agents unless
the user says otherwise.

**Cost-management pattern established 2026-08-23:** for this multi-country,
multi-session expansion task, the user asked to start a fresh chat between
country batches instead of continuing one ever-growing conversation, since
per-message cost scales with accumulated context and nothing important is
lost — the actual work lives in git commits, and this skill file is the
handoff document a fresh session reads automatically. When resuming in a
new chat, this file plus `git log` and a quick per-country entry-count
check (`grep -c 'id: "' src/content/{slug}.ts`) is enough to reconstruct
exactly where the task left off without re-deriving anything from a long
prior transcript.

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
