# Roomify

An AI-first architectural visualization playground — upload floor plans, generate photorealistic 3D visualizations, compare before/after renders, and export results.

Built with React (SSR-ready) and React Router, powered by a small local `puter` backend for persistence and rendering orchestration.

**Key Highlights**

- **Rapid prototyping:** Upload a plan and get a rendered visualization automatically.
- **Before / After comparison:** Drag-to-compare UI powered by `react-compare-slider`.
- **Local-first storage:** Uses `@heyputer/puter.js` for lightweight local persistence during development.
- **SSR-aware:** Routes are registered for server and client parity to avoid hydration mismatches.

**Repository**: See [app/routes.ts](app/routes.ts#L1) for the route manifest and [app/root.tsx](app/root.tsx#L1) for the app shell.

**Quickstart**
Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Build for production and serve the built server:

````powershell
npm run build

```powershell
npm run typecheck
````

**Important Files & Structure**

- **`app/root.tsx`**: App shell, `<Links />` injection and global route `links` (fonts + `app.css`). See [app/root.tsx](app/root.tsx#L1).
- **`app/routes.ts`**: Route manifest used by the dev/SSR tooling. Dynamic visualizer route lives at [app/routes/visualizer.$id.tsx](app/routes/visualizer.$id.tsx#L1).
- **`app/app.css`**: Global CSS loaded via the route `links` to ensure server/client parity (prevents critical CSS hydration differences).
- **`public/.well-known/appspecific/com.chrome.devtools.json`**: Small dev-only stub to avoid dev-server warnings from Chrome DevTools lookups.

**Common Issues & Troubleshooting**

- Hydration mismatch warnings: ensure server-rendered CSS and client-injected CSS match. We load `app.css` using `links` in `app/root.tsx` instead of importing it directly to avoid differing critical CSS between server and client.
- `No routes matched location "/visualizer/:id"`: Confirm the dynamic route is registered in `app/routes.ts` (the manifest must include `routes/visualizer.$id.tsx`).

If you still see problems after following the above, restart the dev server and paste the console output into an issue — I'll help diagnose further.

**Development Tips**

- Use the Upload UI on the home page to create a project and be redirected to `/visualizer/:id`.
- Exports are saved via an anchor download triggered from the visualizer page.
- Keep `@heyputer/puter.js` data under the local app folder; cached deletes are expected during iterative development.

**Contributing**
MIT

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

### Installation

# Roomify

Roomify is an AI-first architectural visualization playground. Upload floor plans, generate photorealistic 3D visualizations, compare before/after renders, and export results — designed for rapid iteration and local-first development.

Why this repo exists

- Prototype an end-to-end architect-centric UX for converting 2D plans to 3D visualizations.
- Demonstrate SSR-aware React routing, local persistence, and a small rendering orchestration flow.

Tech stack

- React 19 (SSR-capable), React Router v7 (route manifest-driven dev/SSR tooling)
- Vite for local dev and bundling
- Tailwind CSS for styling (via `@tailwindcss/vite` plugin)
- `@heyputer/puter.js` for simple local persistence during development
- `react-compare-slider` for visual diffing UI

Repository layout (high level)

- `app/` — application routes and root layout
  - `app/root.tsx` — SSR shell, `<Meta />`, `<Links />`, and global `links` export (fonts + CSS)
  - `app/routes.ts` — route manifest used by the dev/SSR tooling (registers dynamic routes)
  - `app/routes/*.tsx` — route implementations (e.g., `visualizer.$id.tsx`, `home.tsx`)
- `components/`, `ui/` — presentational and shared UI components
- `lib/` — small app services (`puter.action`, `ai.action`, utils)
- `public/` — static assets (includes `.well-known` dev stub)

Quickstart (development)

1. Install dependencies

```bash
npm install
```

2. Start the development server (hot-reloads + SSR-aware routing)

```bash
npm run dev
```

3. Open the app at the local address shown by the dev server.

Build & serve (production)

```bash
npm run build
npm run start
```

Developer workflows and tips

- Creating a project: use the Upload widget on the home page. The app writes a lightweight project to the local `puter` store and navigates to `/visualizer/:id`.
- Styling: global CSS lives in `app/app.css` and is loaded via the `links` export in `app/root.tsx` to ensure server and client use the same critical CSS.
- Dynamic routes: ensure new dynamic route files are added to the `app/routes.ts` manifest so the dev tooling and SSR build include them.

Debugging common issues

- Hydration mismatch warnings (React warning about attributes not matching):
  - Likely causes: differing server/client CSS injection, Date.now()/Math.random used during render, or DOM mutated by extension before React loads.
  - Actionable fixes:
    1. Ensure global CSS is provided via the route `links` (server and client will include identical critical CSS).
    2. Avoid runtime-varying values during server render (move `Date.now()` to effects or provide deterministic snapshots).
    3. Confirm route manifest (`app/routes.ts`) includes all client routes so client routing matches the server render.

- `No routes matched location "/visualizer/:id"` during development:
  - Symptom: navigation to `/visualizer/123` shows a dev-server or console warning and the route does not render.
  - Fix: register the dynamic route file in `app/routes.ts` using `route('routes/visualizer.$id.tsx')`.

Operational notes

- A dev-only stub exists at `public/.well-known/appspecific/com.chrome.devtools.json` to prevent noisy dev-server lookups from Chrome DevTools.

Recommended next steps (for maintainers)

1. Add a minimal E2E test that uploads an image and asserts navigation to `/visualizer/:id`.
2. Add CI `typecheck` and `build` steps.
3. Consider snapshotting server-rendered critical CSS during build for stronger parity checks.

Contributing

- Open issues and PRs welcome. Target small, reviewable PRs and include tests where relevant.

License
MIT
Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---