# PIXIE & the Grad Student: Character Training

A static site and document pack for developing two companion characters, **PIXIE** and **the graduate student**, from a reading exercise through character design, animation and 3D production handoff. It also holds the producer pitch for the project.

Status: owner-review draft (November 2026). The paired book-club portrait is the only owner-approved visual. Turnaround sheets, costumes, acting choices and story interpretations are proposals. No finished 3D model, rig, signed partner or target-game integration exists.

## Entry point

`index.html` redirects to `producer.html`, the producer pitch. There is no build step: open the HTML files in a browser or host the folder as static pages.

## Pages

| File | Purpose |
| --- | --- |
| `producer.html` | Producer pitch: the characters, how they appear, a first production, audience-specific pitches, AI cost pricing and the ask. Styled by `producer.css`. |
| `practice.html` | Training exercise "Reading into character performance": reference manifest, facilitator prompt, staged prompts and learner assessment. Styled by `training.css` and `review.css`. |
| `ensemble.html` | "The Outrider ensemble": costume cost and construction. Covers the route, a film-costume piece, a hybrid protective base with a couture shell, three budget tiers and a four-module tech pack. |
| `research.html` | "Care, mortality, money and legacy": research and placement brief with an evidence ledger and a source register. |

## Markdown documents

| File | Contents |
| --- | --- |
| `producer-brief.md` | Ten-part producer development brief: invitation, story engine, visual authority, audiences, first demonstrator, existing-game route, budget schedule, gates, commercial pathways and the ask. |
| `prompts.md` | Facilitator and generation prompts: turnaround correction, expression study, 3D generation, rigging, reading-performance animatic, human handoff and learner reflection. |
| `research-and-gaps.md` | Research agenda, where each kind of content belongs, evidence rules, open decisions and sources. |

## Reference images

| File | Status |
| --- | --- |
| `approved-book-club.jpg` | Approved portrait. Sets shared facial identity, skin tone, textured curls and style. the graduate student is on the left, PIXIE on the right. |
| `pixie-turnaround.jpg` | Proposed construction reference (teal and gold jacket, mint circuitry). |
| `grad-student-turnaround.jpg` | Proposed construction reference (plum and black velvet, lace collar, brass fastenings). |
| `pixie-outrider.jpg` | Outrider costume image for PIXIE. |
| `pixie-sigil.jpg` | PIXIE sigil image. |

Use the approved portrait for identity and the matching individual sheet for costume and proportions. Do not feed the paired portrait or a multi-person sheet into single-image 3D generation.

## Workflow

1. **Read.** The learner picks a passage and separates text evidence from interpretation.
2. **Design.** Correct one turnaround per character, then make expression and gesture studies.
3. **Model.** Generate one character from reviewed, separate full-body views, then inspect the result.
4. **Rig.** Rig an inspected GLB, then have a technical artist add facial and cloth controls.
5. **Animate.** Make an animatic as a performance reference. It does not prove the rig works.
6. **Hand off.** Specialists finish sculpt, deformation, shading, facial shapes and engine performance.

Reading alone is valid participation. No public reflection, paid generation or personal disclosure is required.

## Principles

- Human review comes before any AI output becomes a reference.
- Proposals stay labeled as proposals until the owner approves them.
- Classroom interpretations do not become Veiled Dominion canon automatically. The destination project's owner decides.
- Money is kept as paid, quoted or estimated. No total is declared until the rows reconcile.
- No partner, platform, professional or integration is represented as attached.

## Repository layout

```
.
├── index.html                      # redirect to producer.html
├── producer.html / producer.css
├── practice.html
├── ensemble.html
├── research.html
├── training.css / review.css
├── producer-brief.md
├── prompts.md
├── research-and-gaps.md
├── approved-book-club.jpg
├── pixie-turnaround.jpg
├── grad-student-turnaround.jpg
├── pixie-outrider.jpg
├── pixie-sigil.jpg
└── .gitignore                      # .DS_Store, node_modules/, .vercel
```

The `.vercel` entry in `.gitignore` suggests Vercel hosting, but the repo has no deployment config.

## Related

- Threshold reading handbook: https://loptr-lab.github.io/training/threshold-book-club.html
- Research and canon boundary: https://github.com/Loptr-Lab/training/blob/main/RESEARCH_AND_CANON_BOUNDARY.md

## License

No license file is present. Add one before inviting reuse.
