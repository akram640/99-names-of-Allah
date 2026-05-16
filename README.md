# 99 Names of Allah

A calm, daily reflection app for Al-Asma-ul-Husna. The home screen shows one name each day, includes a searchable library of all 99 names, and stores simple memorization progress locally.

## Run locally

This is a static ES-module app. No install step is required.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to Netlify

Connect the GitHub repository to Netlify and use:

- Build command: leave empty
- Publish directory: `.`

The included `netlify.toml` already declares the same publish directory.

## Structure

```text
src/
  app/                  App composition and navigation
  content/              Source-organized educational content
  data/                 The 99 Names dataset
  features/             Feature modules: daily name, library, settings
  shared/               Reusable components and utilities
  styles/               Global design system and responsive layout
docs/
  architecture.md       Scaling notes and future roadmap
```

## Content note

The names, transliterations, meanings, and concise explanations use a commonly circulated Al-Asma-ul-Husna ordering, cross-checked against public reference lists such as Britannica, 99NamesOfAllah.name, and MyIslam. MyIslam-derived content is organized under `src/content/` and paraphrased for this app rather than copied directly. Scholarly lists and translations can vary, so keep the dataset reviewable in `src/data/names.js`.
