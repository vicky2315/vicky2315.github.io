# vicky2315.github.io

Personal portfolio site — Game Programmer / Unreal Engine Developer.

Plain HTML/CSS/JS, no build step. Hosted via GitHub Pages.

## Structure
- `index.html` — all sections (hero, about, experience, projects, skills, contact)
- `style.css` — dark/light HUD theme, toggled via `data-theme` on `<html>`
- `script.js` — theme toggle (persists to localStorage) + footer year
- `assets/img/` — project/headshot images (placeholders currently — swap in real media)
- `assets/resume/` — downloadable résumé PDF

## TODO before going live
- [ ] Replace `assets/img/headshot-placeholder.svg` with real photo
- [ ] Replace `assets/img/project-placeholder.svg` per project with real screenshots/GIFs
- [ ] Add YouTube link for Target Forces (Highavenue) if desired
- [ ] Review all copy for accuracy

## Deploy
1. `git init` (if not already), commit, push to `github.com/vicky2315/vicky2315.github.io` (main branch)
2. GitHub repo Settings → Pages → Source: `main` branch, `/ (root)`
3. Site live at `https://vicky2315.github.io` within a few minutes
