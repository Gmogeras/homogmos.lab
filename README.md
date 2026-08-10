# Homogmos Lab

**Exploring Genomes. Finding Life.**

This is the Astro source for the Homogmos Lab website: an independent computational biology laboratory site built around evolutionary genomics, genomic architecture, paleogenomics, scientific software, open projects, and an Exploration Log.

## What changed

This version is no longer a collection of duplicated HTML pages. All pages share a single design system through Astro layouts and components. Research and project routes use clean folder URLs, and the Exploration Log is generated from Markdown content.

## Run locally

You need Node.js 22+.

```bash
npm install
npm run dev
```

Then open the local address Astro prints in the terminal (normally `http://localhost:4321`).

Production test:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repository contains `.github/workflows/deploy.yml`. The Astro configuration automatically detects the GitHub repository name during the GitHub Actions build, so project-site links such as `username.github.io/homogmos-lab/` receive the correct base path.

1. Upload **all contents of this folder** to the root of your `homogmos-lab` GitHub repository.
2. Make sure the default branch is `main`.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions** (not “Deploy from a branch”).
5. Commit/push to `main`.
6. Open **Actions** in the repository and confirm `Deploy Homogmos Lab to GitHub Pages` completes successfully.
7. GitHub will display the public Pages URL.

After this, every commit to `main` builds and publishes the site automatically.

## Add the portrait

Put the image at:

```text
public/assets/founder-photo.jpg
```

That is all. `Behind the Lab` checks whether the image exists and replaces the placeholder automatically. Recommended crop: **4:5 portrait**.

## Add an Exploration Log entry

Create a Markdown file in:

```text
src/content/exploration-log/
```

Example:

```md
---
title: "A new question"
description: "One-sentence summary for the log index."
date: 2026-08-10
status: working
tags: [genomics, TMRCA]
---

Write the entry here in Markdown.
```

Allowed statuses are: `note`, `working`, `reflection`, `release`.

Astro automatically creates the article page and adds it to the Exploration Log index.

## Add a research or project page

Research pages live under:

```text
src/pages/research/
```

Project pages live under:

```text
src/pages/projects/
```

Use `PageLayout.astro` so every new page automatically inherits the laboratory header, footer, Cosmic Latte typography, terminal aesthetic, metadata, and GitHub Pages-safe links.

## Site structure

```text
src/
├── components/
│   ├── Nav.astro
│   └── Footer.astro
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
├── styles/
│   └── global.css
├── content/
│   └── exploration-log/*.md
└── pages/
    ├── index.astro
    ├── manifesto/
    ├── research/
    ├── projects/
    ├── software/
    ├── exploration-log/
    ├── behind-the-lab/
    └── collaborate/
```

## Scientific-status policy

The site deliberately distinguishes ongoing work from established findings. Preliminary Homogmos Lab analyses are labeled as working or unpublished research. Future publications can be linked separately once available.
