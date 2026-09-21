# vicky2315.github.io

Personal portfolio site — Game Programmer / Unreal Engine Developer.

Plain HTML/CSS/JS, no build step. Hosted via GitHub Pages. **Live**: https://vicky2315.github.io

## Structure
- `index.html` — sections in order: Hero, About, Projects, Experience (compact strip), Skills, Contact
- `style.css` — game-HUD theme (scanlines, glow, monospace accents), dark/light via `data-theme` on `<html>`
- `script.js` — theme toggle (persists to localStorage), video modal (YouTube iframe embed), clickable
  project cards (open repo on click, ignoring clicks on inner Source/Video buttons)
- `assets/img/` — project/headshot images (**still placeholders** — swap in real media)
- `assets/resume/` — downloadable résumé PDF (kept in sync with the actual resume file, update if resume changes)

## Status (as of last session)
- Site is live and deployed (GitHub Pages, `main` branch, root).
- Projects grid order: Project Greenleaf (proprietary, text-only, no media/repo link) → Target Forces
  (Highavenue, no repo, video pending) → Soulslike Action Combat System → Sleipnir → F1 Simulator.
- Video buttons wired: **Soulslike** (`6WAuoxmsgwI`) and **Sleipnir** (`-yEBfHxkZ1M`) are live. Target
  Forces and F1 Simulator still have empty `data-video-id` in `index.html` — buttons stay disabled until
  IDs are added there (search for `data-video-id=""`).
- Clickable project cards (open GitHub repo in new tab) are wired for Soulslike, Sleipnir, F1 Simulator
  only (`data-repo-url` attribute on `.project-card`). Greenleaf/Target Forces intentionally not
  clickable — no public repo.
- READMEs written for two of the three open-source project repos (drafted locally, NOT pushed from this
  machine — see below):
  - `action-combat-prototype` (Soulslike) — done, includes class breakdown + code snippets + anim notify
    section + YouTube thumbnail. Pushed successfully? Unconfirmed — was handed to user to paste via
    GitHub web UI since push access wasn't available at the time.
  - `F1Simulator` — done, builds on existing README with a "How It Actually Works" section (real code
    from `CarController`, `CarControllerImproved`, `DRSEnabler`, `LapTimer`, `RaceManager`). Also handed
    off for manual paste.
  - `CaelumProject` (Sleipnir) — **drafted but user paused this one** ("do F1 simulator first, we'll come
    back to this") — draft exists earlier in conversation history, not yet finalized or written anywhere.
    Resume this when asked.

## Known constraint: push access
This machine's cached git credential was originally a **different GitHub account**
(`vignesh-nytwolf`), which caused 403s pushing to `vicky2315` repos. Fixed for **this** repo by deleting
the Windows-cached `git:https://github.com` credential (via `cmdkey`) and re-authenticating as
`vicky2315` — confirmed working for this repo's push. If push to another `vicky2315/*` repo fails with a
403 again, check `cmdkey //list` for the cached github credential's `User:` field — if it's not
`vicky2315`, that's why.

## TODO
- [ ] Real headshot photo → replace `assets/img/headshot-placeholder.svg`
- [ ] Real project screenshots/GIFs → replace `assets/img/project-placeholder.svg` instances (5 total: Greenleaf, Target Forces, Soulslike, Sleipnir, F1 Sim)
- [ ] YouTube video ID for Target Forces → wire into `index.html` (`data-video-id` on the Target Forces card)
- [ ] YouTube video ID for F1 Simulator → same
- [ ] Finish Sleipnir (`CaelumProject`) README and push
- [ ] Confirm whether the Soulslike and F1Simulator README pastes actually landed on GitHub (were handed off manually, not verified)
- [ ] Review all copy for accuracy

## Deploy (reference — already done once)
1. `git init`, commit, `git remote add origin https://github.com/vicky2315/vicky2315.github.io.git`, `git push -u origin main`
2. Repo (not account) Settings → Pages → Source: `main` branch, `/ (root)`
3. Site live at `https://vicky2315.github.io` within a few minutes
