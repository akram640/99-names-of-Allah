# Architecture

## Current Stack

The app is intentionally static:

- HTML entrypoint in `index.html`
- ES modules in `src/`
- CSS design system in `src/styles/global.css`
- No build step or backend required

This keeps first deployment simple on Netlify while still giving the project clean boundaries.

## Feature Boundaries

- `features/daily-name`: owns the daily rotation and home screen.
- `features/names-library`: owns search, filtering, and name cards.
- `features/settings`: owns local preferences.
- `content/names`: owns organized educational content such as concise explanations.
- `content/references`: owns source metadata and study guidance.
- `shared/components`: layout and UI pieces used by multiple features.
- `shared/utils`: pure helpers such as dates, storage, and speech.
- `data`: structured source content.

## Daily Rotation

The daily name is deterministic. It calculates the number of local calendar days since a fixed start date and maps that to one of the 99 names. This means every visitor gets a predictable daily change without a server.

## Scaling Path

Good next upgrades:

- Move to Vite + React when interactions become more complex.
- Add tests around `getDailyName` and search behavior.
- Replace `localStorage` with Supabase or Firebase if user accounts are needed.
- Add audio files in `public/audio/` when verified pronunciation recordings are available.
- Add citations or source metadata per name if the app becomes educational/reference-heavy.
