# Contacts App

A simple, responsive Contacts web application built with **React 18** and **Vite**. It fetches contacts from the free JSONPlaceholder API and shows them in an adaptive card grid.

## Features

- React 18 + Vite ⚡️
- Fetches contacts from `https://jsonplaceholder.typicode.com/users` 📡
- Reusable `ContactCard` component 🧩
- Responsive CSS-Grid layout with CSS Modules 🎨
- Graceful error & loading states ✅
- No UI frameworks – pure CSS 🤍
- Ready for deployment to Netlify, Vercel, or GitHub Pages 🚀

## Getting Started

```bash
# Install dependencies
npm install

# Start a local dev server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` – start Vite dev server with hot-reload.
- `npm run build` – create an optimized production build in `dist`.
- `npm run preview` – locally preview the production build.
- `npm run deploy-gh` – build & deploy to GitHub Pages (requires the `gh-pages` CLI and correct repo URL in `package.json`).

## Deployment

### Netlify

1. Push the repository to GitHub/GitLab.
2. Sign in to Netlify and select **New site from Git**.
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `dist`
5. Deploy 🚀

### Vercel

1. Push to GitHub.
2. Import project in Vercel dashboard.
3. Framework preset: **Vite** (defaults are fine).
4. Deploy.

### GitHub Pages

```bash
# Install gh-pages globally if you don't have it
npm install -g gh-pages

# Add a "homepage" entry in package.json, e.g.:
# "homepage": "https://<username>.github.io/<repo-name>"

# Then run
npm run deploy-gh
```

## Folder Structure

```
src/
  components/
    ContactCard/
      ContactCard.jsx
      ContactCard.module.css
    ContactList/
      ContactList.jsx
      ContactList.module.css
  pages/
    ContactsPage.jsx
  services/
    api.js
  App.jsx
  main.jsx
```

## License

MIT 