<p align="center">
  <img src=".github/logo.svg" width="72" alt="Dolphy logo">
</p>

<h1 align="center">Dolphy extensions</h1>

<p align="center">
  <b>Make Dolphy yours.</b><br>
  Themes, exercise types and tools from the community, installed in one click.
</p>

<p align="center">
  <a href="https://github.com/dolphy-app/extensions/actions/workflows/deploy.yml"><img src="https://github.com/dolphy-app/extensions/actions/workflows/deploy.yml/badge.svg?branch=main" alt="Catalog publishing status"></a>
</p>

<p align="center">
  <a href="https://github.com/dolphy-app/dolphy">Dolphy app</a> ·
  <a href="#install">Install</a> ·
  <a href="CONTRIBUTING.md">Publish yours</a> ·
  <a href="https://github.com/dolphy-app/extension-template">Template</a>
</p>

This is the catalog behind **Settings → Extensions → Catalog** in [Dolphy](https://github.com/dolphy-app/dolphy). Every extension here has passed automated checks and a maintainer's review.

## What's inside

| Extension                         | What it does                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`xp-goals`](extensions/xp-goals) | Earn XP for every solved exercise and reach a daily goal, with streaks and a 14-day history.                                                                                                                                                                                                                                                               |
| **Light themes**                  | [Catppuccin Latte](extensions/theme-catppuccin-latte), [Gruvbox Light](extensions/theme-gruvbox-light), [One Light](extensions/theme-one-light), [Forest](extensions/theme-forest), [Lavender](extensions/theme-lavender), [Sunrise](extensions/theme-sunrise)                                                                                             |
| **Dark themes**                   | [Catppuccin Frappé](extensions/theme-catppuccin-frappe), [Macchiato](extensions/theme-catppuccin-macchiato), [Mocha](extensions/theme-catppuccin-mocha), [Gruvbox Dark](extensions/theme-gruvbox-dark), [Nord](extensions/theme-nord), [One Dark](extensions/theme-one-dark), [Graphite](extensions/theme-graphite), [Midnight](extensions/theme-midnight) |

Extensions can add themes, new exercise types, grading rules, commands, panels, importers and exporters.

## Install

In the app, open **Settings → Extensions → Catalog**, find the extension and click **Install**. It starts working at once, without a restart.

Extensions run with the rights of the app: there is no sandbox and no permission prompt. What protects you is the review: every extension and every new version enters the catalog through a pull request that passes automated checks and a maintainer's review against [`rules/rules.json`](rules/rules.json). The review reads the code, but it is not a guarantee, so install only what you need.

## Write your own

1. Start from the [extension template](https://github.com/dolphy-app/extension-template) (**Use this template**) or run `npx --package=@dolphy-app/create-extension create-dolphy-extension <directory> --id <id>`.
2. Build and check it: `npx dolphy-ext build`.
3. Open a pull request here with the project in `extensions/<id>/`.

The full publishing guide, the extension format and the catalog requirements are in [CONTRIBUTING.md](CONTRIBUTING.md). How the catalog is built and run is in [MAINTAINING.md](MAINTAINING.md).
