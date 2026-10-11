# Project tracking

Last reviewed: 2026-10-11 (Asia/Saigon)
Baseline: `main`, commit `a3099fa` (2025-05-12).

## Scope and current state

Personal game developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. This repository contains the portfolio website, not the Unity game source code.

Initial review was based on source inspection. Dependencies have since been installed for the portfolio redesign below. External links and browser behavior remain unverified. The working tree was clean before this tracking document was added.

| Area | Source status | Evidence |
| --- | --- | --- |
| Application routing | Implemented: home and fallback page | `src/App.tsx`, `src/pages/NotFound.tsx` |
| Home composition | Implemented: navigation, introduction, projects, awards, contact, footer | `src/pages/Index.tsx` |
| Introduction | Implemented: biography and profile image | `src/components/Hero.tsx` |
| Projects | Implemented: two game cards and external play links | `src/components/Projects.tsx` |
| Awards | Implemented: four award cards | `src/components/Awards.tsx`, `src/components/AwardCard.tsx` |
| Contact | Implemented: social links; email link needs correction | `src/components/Contact.tsx` |
| Navigation | Buttons rendered; actions not implemented | `src/components/Navbar.tsx` |
| Responsive layout | Breakpoint classes present; browser verification pending | Page components |
| Backend / persistence | No backend integration found in inspected application code | Page components, `src/App.tsx` |
| Automated verification | Build and lint scripts available; no test script configured | `package.json` |

## Backlog

Priorities: P1 = broken user interaction; P2 = presentation, maintainability, or verification.
The table below preserves the initial backlog. See the redesign update below for implementation and verification status.

| ID | Priority | Task | Evidence | Completion criteria |
| --- | --- | --- | --- | --- |
| NAV-01 | P1 | Implement desktop section navigation | Navbar buttons have no links or click handlers | Home, Projects, Achievements, and Contact reach their sections without hiding headings under the fixed navbar |
| NAV-02 | P1 | Implement mobile navigation | Mobile Menu button has no handler | Menu opens, closes, supports keyboard access, and navigates to each section |
| NAV-03 | P1 | Repair Hero actions | `href="#project"` has no matching section ID; Contact button has no action | Both calls to action reach the corresponding section |
| CONTACT-01 | P1 | Repair email link | Gmail href is a bare email address | Link uses `mailto:` and does not navigate to an application route |
| STYLE-01 | P2 | Correct unconfigured CSS utility names | `py-17` in Awards and `gre` in Contact; neither is defined in inspected styles/config | Intended spacing and styling use valid classes |
| META-01 | P2 | Replace template metadata | `index.html` still uses Lovable description, author, and social metadata | Initial title, description, author, and share preview represent the portfolio |
| CONTENT-01 | P2 | Confirm biography and award information | Biography describes a senior student; award descriptions differ between Hero and Awards | Owner confirms current biography and consistent award names, prizes, and organizations |
| CONTENT-02 | P2 | Verify external destinations | Game and social URLs are defined in page components | All intended destinations are checked and documented |
| STRUCTURE-01 | P2 | Separate portfolio data from rendering | Project and award arrays are declared inside components | Typed data modules have clear folder responsibilities; components focus on presentation |
| CONVENTION-01 | P2 | Align applicable conventions | Vietnamese comments in Projects and CSS; folder named `imagess` | English code comments, clear asset folder naming, and imports updated consistently |
| QA-01 | P2 | Establish build and lint baseline | Dependencies absent; scripts exist | Install dependencies with lockfile, run build and lint, record actual results |
| QA-02 | P2 | Verify responsive and accessible behavior | Source-only review | Check narrow mobile layout, desktop layout, keyboard navigation, focus visibility, contrast, and reduced-motion behavior |
| DOC-01 | P2 | Document project-specific setup and release process | README is the generated Lovable template | README describes actual structure, commands, and verified deployment process |

## Initial verification record (before redesign)

| Check | Result |
| --- | --- |
| Git baseline | `main` at `a3099fa`; clean before tracking document |
| Source inventory and main page review | Completed |
| Build | Not run: dependencies absent |
| Lint | Not run: dependencies absent |
| Browser / mobile / accessibility | Not run |
| External URLs | Not checked |
| Live deployment | Not checked |

Suggested next sequence: establish build/lint baseline, fix P1 interactions, verify browser behavior, then address P2 items. These are proposed tasks, not commitments or assigned deadlines.

## Conventions for future changes

Apply the provided naming, English comment/log, and clarity conventions where relevant to TypeScript/React. Preserve standard React and library conventions. Prefer components with one responsibility and separate typed data modules; introduce abstractions only for concrete needs. C# class/namespace rules and the prohibition on Unity `Destroy` apply if C#/Unity source is added later; none was found in this repository.

## Updating this tracker

For each completed task, record the date, commit, and verification evidence. Use Open, In progress, Blocked, or Done, and mark Done only after its completion criteria are verified. Refresh the baseline and verification record after subsequent reviews. This document is a manual snapshot; automatic monitoring is not configured.

## Portfolio redesign — 2026-10-11

Implemented locally, not committed or deployed:

- Navy, teal, and warm white visual system; new typography hierarchy, spacing, portrait composition, project cards, award gallery, and contact section.
- Desktop anchors and collapsible mobile navigation, with Escape support, section scroll offsets, a skip link, and visible focus styles.
- Hero project/contact links and a corrected `mailto:` destination.
- Responsive styles and reduced-motion support. Browser verification is pending because no browser is connected in this session.
- Replaced unrelated stock imagery with a typographic Jump Dash cover. Existing portrait, game artwork, award photographs, and destination URLs are retained.
- Portfolio-specific title and metadata, matching fallback-page styling, and current-year footer.
- Typed portfolio records in `src/types/`; content in `src/data/`; presentation in `src/components/`.

Backlog updates: NAV-01, NAV-02, NAV-03, CONTACT-01, STYLE-01, and META-01 are implemented, pending browser acceptance checks. STRUCTURE-01 is implemented and type checked. CONVENTION-01 is partially addressed; the existing asset folder name is retained. CONTENT-01, CONTENT-02, QA-02, and DOC-01 remain open.

Verification: final `npm run build`, `tsc -p tsconfig.app.json --noEmit`, and ESLint of all modified page/component/data/type files passed. Build reports an outdated Browserslist database warning. No external-link, browser, or deployment verification was performed.

## Game collection and motion update — 2026-10-11

- Added Topic Match 3D, Cargo Crew: Color Puzzle, Saw Blast, Sand Maze: Arrow Escape, and Slice Quest: Island Puzzle alongside the two existing personal projects.
- Downloaded 15 official Google Play images locally: one icon and two screenshots per game. Sources are recorded in `docs/GAME_ASSETS.md`.
- Owner confirmed Gameplay / Unity Developer as the role for the five Android games. Store descriptions were summarized without inventing project contributions, ratings, or release dates.
- Added animated All games / Android games / Personal projects filters, section reveal effects, active navigation indicators, and reduced-motion handling.
- Adapted the supplied NEXZAP reference's cream/orange palette, expressive typography, and game collection to the personal portfolio.
- Production build, application TypeScript, targeted ESLint, and the presence/format of all 15 image files passed. No browser is connected for visual or interactive QA; this remains pending.

## CV content and transition refinement — 2026-10-11

- Read and visually inspected both pages of the owner's supplied CV. Added Zlab Studio and Ebizworld experience, technical skills, Computer Science education, four linked gameplay prototypes, ICPC participation, and Prompt to Play participation.
- Corrected award labels and organizers against the CV. Added semantic emphasis to key skills, responsibilities, and the two-week prototype milestone.
- Added reusable Download CV links in the introduction, experience section, and contact section. `public/cv/Unity-Dev-Nguyen-Van-Viet.pdf` is a byte-for-byte copy of the supplied PDF; no PDF content was edited.
- Replaced per-card layout/scale transitions with a short sequential fade. The collection height is measured separately and animates without scaling card contents.
- Removed whole-section reveal wrappers and hero entrance motion. The mobile menu now overlays the page rather than changing its height; navigation emphasis uses a local underline.
- Production build, application TypeScript, and targeted ESLint passed. Browser inspection could not run: the Windows automation runtime failed to initialize and the browser inventory returned no connected browsers. Live HTTP and CV download checks are recorded after completion.
