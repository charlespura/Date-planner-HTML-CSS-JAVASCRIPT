# Little Date ♡

A modern, responsive date planner rebuilt from `date.html` with React, TypeScript, Vite, and Tailwind CSS 4.

## Features

- Four guided chapters: movie, date and time, food and drinks, and excitement.
- Live itinerary, back navigation, selection states, and required-choice validation.
- Download the completed plan as a text file or start again.
- Warm cream and coral design, real movie posters, animated transitions, and mobile layouts.
- Keyboard focus indicators, accessible form labels, and reduced-motion support.
- No backend, API keys, or sign-up. Posters load from TMDB's image CDN and need an internet connection; decorative artwork appears if a poster fails to load. Plans live in memory and reset on refresh; download to keep one.

## Run locally

Install Node.js 22.12+ and npm, then run:

```sh
npm install
npm run dev
```

Open the localhost URL printed by Vite. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

```sh
npm run build   # TypeScript check and production build in dist/
npm run preview # Preview the production build locally
```

Use the Vite server for development; opening HTML files directly or serving the source with XAMPP will not compile TSX.

## Deploy to GitHub Pages

1. Push this project, including `package-lock.json` and `.github/workflows/deploy.yml`, to your GitHub repository's `main` or `master` branch.
2. In the repository, open **Settings → Pages → Build and deployment → Source**, then select **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages**. Push a new commit or choose **Run workflow**.
4. After the workflow succeeds, find the published URL under **Settings → Pages** or in the deployment summary.

The workflow installs locked dependencies, checks TypeScript, builds, and deploys `dist/` using GitHub's official Pages actions. Vite's relative `base: './'` supports both repository project URLs and root/custom-domain URLs. If you use a different deployment branch, update `on.push.branches` in the workflow. Your repository/account must support Pages, and repository Actions permissions must allow deployment.

No site has been published simply by adding the workflow; GitHub runs it after you push and enable Pages.

## Project structure

```text
src/App.tsx                    Planner state and UI
src/index.css                  Tailwind import, theme, artwork, animation
src/main.tsx                   React entry point
index.html                     Vite HTML entry
vite.config.ts                 React + Tailwind plugins; relative asset paths
.github/workflows/deploy.yml    GitHub Pages build and deployment
date.html                      Original version, kept for reference
```

Edit the `movies`, `foods`, and `drinks` lists in `src/App.tsx` to customize choices. Add matching poster filenames in `src/posters.ts`. Theme colors and animation rules are in `src/index.css`. Promotional posters are hosted by [The Movie Database](https://www.themoviedb.org/); images belong to their respective rights holders. This project is not endorsed or certified by TMDB.

## References

- [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
