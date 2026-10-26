# shadcn Light

The light theme of [shadcn/ui](https://ui.shadcn.com): neutral grays, a near-black accent, the Inter font, rounded controls with a soft 3px focus ring, an accordion drawn as rows with a bottom border, pill-shaped tabs and neutral alerts.

- Contribution: the theme `theme-shadcn-light` (“Settings → Appearance”; listed there as “shadcn Light”).
- Icon: `assets/icon.png`, a 128×128 miniature of the app drawn from the theme's colors. Regenerate it with `node scripts/theme-icon.mjs extensions/theme-shadcn-light` from the repository root.
- Layout (app 0.8 format): `extension.json` holds the metadata (`minAppVersion` 0.8.0, tag `theme`), `src/theme.json` holds the colors and the shape `tokens` (corner radii and the font), `src/theme.css` holds the style sheet and `src/index.ts` registers both from the `client` export with `addTheme`; `dolphy-ext build` inlines the CSS into `client.mjs`, and the style sheet addresses the font files as `dolphy-ext://theme-shadcn-light/assets/fonts/…`. The theme has no server part. The extension runs with the rights of the app, but this one reads no files, uses no network and stores nothing.
- Requires Dolphy 0.8.0 or newer: older apps reject the `tokens` and `css` keys of `addTheme`.
- Base: a light theme (`dark: false`). The style sheet is active only while this theme is selected and changes how Vuetify components look (buttons, fields, cards, chips, alerts, tabs, lists, menus, dialogs, tooltips, switches, progress bars and accordions); it does not change layout or behavior.
- Font: Inter (variable, Latin and Cyrillic subsets) is shipped as `woff2` files in `assets/fonts` and loaded from the extension; the theme falls back to the system font if loading fails.

## Sources

Values are taken from the CSS of [shadcn/css](https://shadcn-css.com) (the Button, Input, Card, Badge, Alert, Tabs, Accordion, Dialog, Tooltip, Checkbox, Switch and Progress components) and its theme variables (`--background`, `--foreground`, `--card`, `--primary`, `--muted`, `--border`, `--radius` …), converted from `oklch` to `#rrggbb`. The radii are the scale of the site: `--radius` is 0.625rem, so small 0.375rem, medium 0.5rem, large 0.625rem and extra large 0.875rem.

- shadcn/ui and shadcn/css: MIT License. This extension is an independent adaptation and is not affiliated with or endorsed by their authors.
- Tailwind CSS color palette (`amber`, `green`, `blue`): MIT License; used for `warning`, `success` and `info`, which shadcn does not define.
- Inter by The Inter Project Authors, https://github.com/rsms/inter, SIL Open Font License 1.1, files from [`@fontsource-variable/inter`](https://github.com/fontsource/font-files).
- The mapping from palette roles to Dolphy roles is below. `secondary` is a mid-gray here, not the near-white `--secondary` of shadcn: Dolphy draws chips and links in `secondary` as text, and a near-white text would vanish. Filled secondary buttons keep the shadcn look through the style sheet.

| Role | shadcn role | Value |
| --- | --- | --- |
| `background` | background | `#FFFFFF` |
| `surface` | card | `#FFFFFF` |
| `surface-variant` | muted | `#F5F5F5` |
| `on-surface` | foreground | `#0A0A0A` |
| `on-surface-variant` | muted-foreground | `#737373` |
| `primary` | primary | `#171717` |
| `on-primary` | primary-foreground | `#FAFAFA` |
| `secondary` | (neutral-600 / neutral-400, see below) | `#525252` |
| `error` | destructive | `#E7000B` |
| `warning` | amber | `#BB4D00` |
| `success` | green | `#008236` |
| `info` | blue | `#155DFC` |

## Contrast

WCAG 2.x contrast ratios computed from the colors in `src/theme.json`. Text pairs need 4.5:1; the `primary` accent against `background` needs 3:1.

| Pair | Ratio | Needed | Met |
| --- | --- | --- | --- |
| `on-background / background` | 19.80:1 | 4.5:1 | yes |
| `on-surface / surface` | 19.80:1 | 4.5:1 | yes |
| `on-surface / surface-variant` | 18.16:1 | 4.5:1 | yes |
| `on-surface-variant / surface` | 4.74:1 | 4.5:1 | yes |
| `on-surface-variant / surface-variant` | 4.35:1 | 4.5:1 | **no** |
| `on-surface-variant / background` | 4.74:1 | 4.5:1 | yes |
| `on-primary / primary` | 17.18:1 | 4.5:1 | yes |
| `on-secondary / secondary` | 7.49:1 | 4.5:1 | yes |
| `on-error / error` | 4.77:1 | 4.5:1 | yes |
| `on-warning / warning` | 5.03:1 | 4.5:1 | yes |
| `on-success / success` | 4.95:1 | 4.5:1 | yes |
| `on-info / info` | 5.25:1 | 4.5:1 | yes |
| `primary / background` | 17.93:1 | 3:1 | yes |
| `primary / surface` | 17.93:1 | 4.5:1 | yes |
| `secondary / surface` | 7.81:1 | 4.5:1 | yes |
| `error / surface` | 4.77:1 | 4.5:1 | yes |
| `warning / surface` | 5.03:1 | 4.5:1 | yes |
| `success / surface` | 4.95:1 | 4.5:1 | yes |
| `info / surface` | 5.25:1 | 4.5:1 | yes |
| `hero-contrast / hero-start` | 17.93:1 | 4.5:1 | yes |
| `hero-contrast / hero-end` | 10.37:1 | 4.5:1 | yes |

### Known limitations

The official colors are used as they are, so these pairs stay below 4.5:1. Use these colors for fills, icons and large or bold text only, not for small body text:

- `on-surface-variant / surface-variant`: 4.35:1
