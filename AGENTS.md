# Repository Guidelines

## Project Structure & Module Organization

This repository is a Slidev presentation project. The main deck lives in `slides.md`; update this file for slide content, frontmatter, transitions, notes, and slide-scoped styles. Reusable Vue components belong in `components/` and are auto-available to Slidev. Code examples and imported snippets live in `snippets/`. Additional markdown pages can be placed in `pages/`. Deployment configuration is kept at the root in `netlify.toml` and `vercel.json`.

## Build, Test, and Development Commands

Use `pnpm` for dependency management; the lockfile is `pnpm-lock.yaml`.

- `pnpm install`: install dependencies.
- `pnpm run dev`: start the Slidev dev server and open the deck, usually at `http://localhost:3030`.
- `pnpm run build`: build the presentation as a static site.
- `pnpm run export`: export the deck using Slidev's export pipeline.

## Coding Style & Naming Conventions

Write slide content in Markdown with Slidev frontmatter blocks separated by `---`. Keep slide-specific CSS close to the slide when it is only used once. Vue components should use Vue 3 single-file components and `<script setup lang="ts">`, as in `components/Counter.vue`. Prefer concise, descriptive names such as `ProgressMeter.vue` for components and `external.ts`-style lowercase names for snippet files. Use two-space indentation in Vue templates, TypeScript, YAML, and Markdown frontmatter. Keep TypeScript examples small and strongly typed when practical.

## Testing Guidelines

There is no automated test script configured yet. Validate changes by running `pnpm run dev` and checking the affected slides in the browser. For release or deployment changes, also run `pnpm run build` to catch Slidev, Vue, or markdown compilation errors. If tests are added later, place them near the code they cover and add the command to `package.json`.

## Commit & Pull Request Guidelines

This repository currently has no commit history, so use a simple conventional commit style going forward, for example `docs: update roadmap slides` or `feat: add interactive timeline`. Pull requests should include a short description, the commands run for validation, and screenshots or exported pages when visual slide changes are significant. Link any related issue or task when available.

## Agent-Specific Instructions

Keep generated content concise and presentation-focused. Avoid broad refactors while editing slides. Do not commit build artifacts, dependency folders, or exported files unless the user explicitly requests them.

At the end of each work iteration, suggest one concise conventional commit title that matches the completed changes, for example `docs: update contributor guidelines`.
