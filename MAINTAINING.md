# Maintaining the catalog

## How the catalog works

| What                      | Where                                                                |
| ------------------------- | -------------------------------------------------------------------- |
| Extension sources         | `extensions/<id>/` (`main` branch)                                   |
| Published files and index | `gh-pages` branch: `index.v2.json` and `extensions/<id>/<version>/…` |
| Version revocation        | `revoked.json` (a list of `{ id, versions, reason }`)                |
| PR checks                 | `.github/workflows/pr-check.yml`                                     |
| Publishing                | `.github/workflows/deploy.yml`                                       |

The app reads `index.v2.json` and downloads a version's files by relative `baseUrl`, verifying the size and sha256 of every file. The index keeps at most the five latest versions of an extension; older directories stay in `gh-pages`. The app picks the newest version it is compatible with (`minAppVersion`, platform). The `index.json` of the 0.4 format is no longer written; the copy that is still in `gh-pages` is what apps older than 0.5 read.

The first 0.5 publication replaces the `index.v2.json` written by the 0.4 tools (the 0.5 tools cannot read it); `scripts/legacy-index.mjs` detects it and both workflows handle it.

## For maintainers

- **Revoking a version.** Add an entry to `revoked.json`, for example `{ "id": "acme.tool", "versions": "<1.2.0", "reason": "..." }`. Ranges `<`, `<=`, `>`, `>=`, `=` and their space-separated combinations are allowed. After the merge CI rebuilds the index; apps disable installed revoked versions on their next check.
- **GitHub Pages.** The source is the `gh-pages` branch, root directory. The free GitHub plan serves Pages only from public repositories, so the repository must be public before the first publication.
- **Branch protection.** Enable protection for `main` (required `PR check` status, merge only through a pull request) wherever your plan allows it.
- **The index the app reads:** `https://dolphy-app.github.io/extensions/index.v2.json`.
