# Character Training — binding agent instructions

Applies to all changes in this repository. Preserve existing owner decisions and the current implementation; this file defines boundaries, not new feature scope.

## Hosting and release authority

1. **GitHub is the source of truth.** `ibloud/character-training` `main` is the approved code branch. The owner's intended public production publication is **GitHub Pages**, not a Vercel production domain.
2. **Vercel is for preview and owner acceptance only.** Use an isolated feature/review branch and an actual page-level Vercel preview URL. Never describe a Vercel production deployment as the approved production site, and never substitute a Vercel dashboard or GitHub code page for a requested visual preview.
3. **"Push to main" means update the GitHub `main` branch**, not authorize promoting, aliasing, or configuring Vercel production. Before pushing, inspect whether GitHub-to-Vercel automation will also create a production deployment; disclose that side effect and avoid it if technically possible without unauthorized configuration changes. If it cannot be prevented, state the limitation clearly instead of pretending the push is GitHub-only.
4. **Do not alter hosting, DNS, domains, Pages configuration, Vercel production-branch settings, deployment aliases, or other provider settings without explicit owner authorization.** Do not create a new production host. GitHub Pages publication is not proven merely by a successful Git push; verify its live URL before claiming publication.
5. Preserve the exact reviewed commit, owner-approved image placement, video sources/posters, and all unrelated content. Correct only the requested region. No unsolicited artwork, page structure or canon changes.

## Work process and continuity

- Read this file, `README.md`, affected source files, relevant current branch/PR state, and the owner-approved instructions before editing. Check work already implemented or assigned; amend existing work rather than duplicating it.
- Before any visual edit, use the **PIXIE-specific** brand guidance in `Loptr-Lab/pixie-ecosystem-guide` (the owner-reviewed `brand-guidelines.md` in PR #9) for her accepted sigil, colors, typography, motion, contextual helper and accessibility. Loptr Lab's broader design guidance does not override PIXIE's identity. Do not substitute a different logo, portrait, or newly generated art without direction.
- Preserve one shared stylesheet `training.css`; avoid new styling dependencies and duplicate overrides. Maintain iPad Safari, keyboard, contrast, reduced-motion, accessible labels, and responsive checks.
- Distinguish the **character portfolio** (story, character relationship and approved visuals) from the **producer development package** (demonstrator, production work, cost evidence, schedule/rights gates and commissioning ask). Do not repeat the same landing page on both routes.
- Distinguish source facts, historical interpretations, speculative adaptations, and approved Veiled Dominion canon. Do not change the separate Death's Daughter or Violet's Revenge stories by implication.
- Verify the exact changed HTML/CSS/assets on the preview deployment, then provide **direct Vercel page links** for visual review. Do not treat HTTP 200 as full visual or physical iPad/VoiceOver acceptance.
- After explicit approval to push, verify the branch/commit relationship and update GitHub `main` without overwriting newer work. Report GitHub state and any automatic deployments separately, truthfully, and without confusing provider URLs with the intended production destination.

## Current status boundary (15 November 2026)

The character portfolio and producer package were approved and pushed to GitHub `main`. Vercel was also configured to deploy automatically from `main`, causing a Vercel production deployment; **that automatic side effect is not an owner's approval of Vercel as the production host**. Do not reverse code or change provider configuration without a separate request. GitHub Pages publication remains to be verified rather than assumed.
