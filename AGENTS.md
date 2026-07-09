# AGENTS.md

## Cursor Cloud specific instructions

This repository is the **Mintlify documentation site for Ref** (published at
[docs.ref.tools](https://docs.ref.tools)). It contains only docs content: `.mdx`
pages, images/logos, `docs.json` (Mintlify site config), `style.css`, and
`modify.js`. There is **no application backend, no `package.json`, no database,
and no test suite** in this repo — the actual products (the Ref MCP server and
Ref Plans app) live in separate repositories.

### Tooling

- Docs are rendered by the **Mintlify CLI** (`mint`), installed globally by the
  startup update script. Verify with `mint --version`.
- The CLI is invoked from the repo root (where `docs.json` lives).

### Run / preview

- `mint dev` — serves the docs locally at `http://localhost:3000` (also binds a
  network address). First launch shows `preparing local preview...` then
  `preview ready`; give it a few seconds before curling the port.

### Lint / test / build

- There is **no lint step, no automated tests, and no local build/deploy step**.
  Mintlify builds and deploys automatically on push via the hosted platform.
- `mint broken-links` is the closest thing to a validation/lint check — it
  reports broken internal links. Note there are pre-existing broken links in the
  repo (e.g. `/resources`); a non-empty result is not necessarily caused by your
  changes.

### Non-obvious gotchas

- The site's search bar is Ref's **authenticated** search ("Login into CLI to
  enable search"), not standard Mintlify search — it will not return results
  locally without CLI login. This is expected, not a bug.
