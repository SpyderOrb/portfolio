# Alex’s portfolio

Local draft for SpyderOrb/portfolio. Open index.html directly or serve this directory with `python3 -m http.server 4173 --bind 127.0.0.1`. The site runs without a build step, external scripts, or tracking.

## Copy to confirm

The Direction section proposes technical support or NOC operations as the next step, continued web work alongside it, and ownership and visible usefulness as criteria for the projects Alex wants to pursue. The section marks this wording as a draft.

The Open orbit concept is the provisional mark. All three concepts are in [the contact sheet](brand/concepts.png).

## Project sources

The five case summaries use the local project READMEs. The incident replay uses the time of each command completion and each event in the MON‑01 validation record. All four times come from the same historical lab trial.

## Hero artwork

Generated with the built-in ImageGen tool. The responsive files are `assets/workbench.webp` and `assets/workbench-small.webp`.

> Use case: stylized-concept. Asset type: local portfolio hero illustration, square composition. Create an editorial gouache and ink illustration on midnight indigo paper, showing one workbench lamp illuminating an open notebook with a hand-drawn branching network topology and a single cobalt patch cable tracing a thoughtful path across the composition. A small peach branch with two leaves sits to one side, a subtle nod to an orchard project. Top-down three-quarter viewpoint, deliberate asymmetry, subtle print grain, large calm shapes, strong contrast. Palette of almost-black navy, faded cobalt, ecru and muted peach. Sharp composition that reads at 350px wide. Fill the square, avoid framing borders, reserve a quiet upper-right corner. No people, prose, letters, numbers, logos, screen mockups or watermarks.

## Interactive website demos

The portfolio serves two static snapshots from the same origin as the main page. Run the local HTTP server above to try both previews, including the orchard’s saved language choice. Each preview has an option to open the site without the surrounding viewer. Sol Music Studio links to its live domain.

- `demos/packetcraft-academy/` mirrors Packetcraft Academy at `e8fb97c`.
- `demos/peach-plot/` mirrors The Peach Plot at `4c1dee2` and includes the six assets referenced by the site.

The snapshots preserve the original client-side interactions. Both have a content security policy that blocks real form submissions and script-initiated network requests. The orchard retains its optional Google Fonts stylesheet. To update either demo, copy the reviewed HTML, CSS, JavaScript and referenced media from the source revision, keep the preview metadata in the HTML, and update the revision listed here.
