# Darshil Maru — Portfolio

A React + Vite + Tailwind portfolio site with client-side routing, a cursor sparkle trail, and a ⌘K command palette.

## What's new in this version

- **Multi-page**: Home (`/`), Experience (`/experience`), Projects (`/projects`) — routed with React Router.
- **⌘K / Ctrl+K command palette**: jump to any page, download the résumé, or open LinkedIn/email without touching the mouse.
- **Sparkle cursor trail**: a lightweight canvas particle effect that follows the pointer/touch. Automatically disabled if the visitor's OS has "reduce motion" turned on.
- **New theme**: deep-forest background with a bioluminescent mint glow and a warm coral accent — different from the navy/amber version.

## Before you deploy

1. Open `src/data/content.js` and fix the fields marked ⚠️:
   - `profile.email`
   - `profile.phone`
   - `profile.linkedin` (currently a placeholder)
   - `education.period`
   These were extracted from a PDF with unreliable text encoding, so double-check them.
2. Your resume PDF is already in `public/Darshil_Maru_Resume.pdf` — replace it any time by dropping in a new file with the same name (or update `profile.resumeFile` in `content.js`).

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy — Option A: Vercel (easiest)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, click "Add New Project", pick the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.
4. Done — you'll get a live URL like `darshil-portfolio.vercel.app`. Add a custom domain later in Vercel's project settings if you want.

## Deploy — Option B: GitHub Pages

1. Install the gh-pages helper:
   ```bash
   npm install -D gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://<your-github-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set the base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/<repo-name>/",
   })
   ```
4. This site uses client-side routing (`/experience`, `/projects`), so GitHub Pages needs a fallback or direct links + refresh will 404. After building, copy the fallback:
   ```bash
   npm run build && cp dist/index.html dist/404.html
   ```
   Then update the `predeploy` script in `package.json` to `"predeploy": "npm run build && cp dist/index.html dist/404.html"`.
5. Push to GitHub, then run:
   ```bash
   npm run deploy
   ```
6. In your repo's Settings → Pages, set the source branch to `gh-pages`. Your site will be live at the `homepage` URL within a few minutes.

> Vercel and Cloudflare Pages (options A and C) handle this routing automatically — no extra step needed there. `vercel.json` is already included for Vercel.

## Deploy — Option C: Cloudflare Pages

1. Push to GitHub.
2. Go to https://pages.cloudflare.com → Create a project → connect the repo.
3. Build command: `npm run build`, output directory: `dist`. Deploy.

## Editing content

Everything text-based (summary, skills, experience, projects, certifications, awards, education) lives in one file: `src/data/content.js`. Edit that file and redeploy — no need to touch the components.
