# shadcn Dark

The dark theme of [shadcn/ui](https://ui.shadcn.com): neutral grays, a light accent, the Inter font, rounded controls with a soft 3px focus ring, an accordion drawn as rows with a bottom border, pill-shaped tabs and neutral alerts.

- Contribution: the theme `theme-shadcn-dark` (“Settings → Appearance”; listed there as “shadcn Dark”).
- Icon: `assets/icon.png`, a 128×128 miniature of the app drawn from the theme's colors. Regenerate it with `node scripts/theme-icon.mjs extensions/theme-shadcn-dark` from the repository root.
- Layout (app 0.8 format): `extension.json` holds the metadata (`minAppVersion` 0.8.0, tag `theme`), `src/theme.json` holds the colors and the shape `tokens` (corner radii and the font), `src/theme.css` holds the style sheet and `src/index.ts` registers both from the `client` export with `addTheme`; `dolphy-ext build` inlines the CSS into `client.mjs`, and the style sheet addresses the font files as `dolphy-ext://theme-shadcn-dark/assets/fonts/…`. The theme has no server part. The extension runs with the rights of the app, but this one reads no files, uses no network and stores nothing.
- Versions: 1.0.0 is the first release. 1.0.1 fixes the floating labels of outlined fields (they were nearly invisible), the black bars of skeleton loaders, the weight of sliders and the contrast of snackbars. 1.0.2 draws the focus ring around the floating label of a field instead of through it, shows the first line of a textarea, draws the switch thumb inside its track and makes the chip and the border of the daily-plan card visible in the dark theme. Requires Dolphy 0.8.0 or newer: older apps reject the `tokens` and `css` keys of `addTheme`.
- Base: a dark theme (`dark: true`). The style sheet is active only while this theme is selected and changes how Vuetify components look (buttons, fields, cards, chips, alerts, tabs, lists, menus, dialogs, tooltips, switches, progress bars and accordions); it does not change layout or behavior.
- Font: Inter (variable, Latin and Cyrillic subsets) is shipped as `woff2` files in `assets/fonts` and loaded from the extension; the theme falls back to the system font if loading fails.

## Sources

Values are taken from the CSS of [shadcn/css](https://shadcn-css.com) (the Button, Input, Card, Badge, Alert, Tabs, Accordion, Dialog, Tooltip, Checkbox, Switch and Progress components) and its theme variables (`--background`, `--foreground`, `--card`, `--primary`, `--muted`, `--border`, `--radius` …), converted from `oklch` to `#rrggbb`. The radii are the scale of the site: `--radius` is 0.625rem, so small 0.375rem, medium 0.5rem, large 0.625rem and extra large 0.875rem.

- shadcn/ui and shadcn/css: MIT License. This extension is an independent adaptation and is not affiliated with or endorsed by their authors.
- Tailwind CSS color palette (`amber`, `green`, `blue`): MIT License; used for `warning`, `success` and `info`, which shadcn does not define.
- Inter by The Inter Project Authors, https://github.com/rsms/inter, SIL Open Font License 1.1, files from [`@fontsource-variable/inter`](https://github.com/fontsource/font-files).
- The mapping from palette roles to Dolphy roles is below. `secondary` is a mid-gray here, not the near-white `--secondary` of shadcn: Dolphy draws chips and links in `secondary` as text, and a near-white text would vanish. Filled secondary buttons keep the shadcn look through the style sheet.

| Role | shadcn role | Value |
| --- | --- | --- |
| `background` | background | `#0A0A0A` |
| `surface` | card | `#171717` |
| `surface-variant` | muted | `#262626` |
| `on-surface` | foreground | `#FAFAFA` |
| `on-surface-variant` | muted-foreground | `#A1A1A1` |
| `primary` | primary | `#E5E5E5` |
| `on-primary` | primary-foreground | `#171717` |
| `secondary` | (neutral-600 / neutral-400, see below) | `#A3A3A3` |
| `error` | destructive | `#FF6467` |
| `warning` | amber | `#FFB900` |
| `success` | green | `#05DF72` |
| `info` | blue | `#51A2FF` |

## Contrast

WCAG 2.x contrast ratios computed from the colors in `src/theme.json`. Text pairs need 4.5:1; the `primary` accent against `background` needs 3:1.

| Pair | Ratio | Needed | Met |
| --- | --- | --- | --- |
| `on-background / background` | 18.97:1 | 4.5:1 | yes |
| `on-surface / surface` | 17.18:1 | 4.5:1 | yes |
| `on-surface / surface-variant` | 14.50:1 | 4.5:1 | yes |
| `on-surface-variant / surface` | 6.94:1 | 4.5:1 | yes |
| `on-surface-variant / surface-variant` | 5.86:1 | 4.5:1 | yes |
| `on-surface-variant / background` | 7.66:1 | 4.5:1 | yes |
| `on-primary / primary` | 14.23:1 | 4.5:1 | yes |
| `on-secondary / secondary` | 7.85:1 | 4.5:1 | yes |
| `on-error / error` | 6.85:1 | 4.5:1 | yes |
| `on-warning / warning` | 11.49:1 | 4.5:1 | yes |
| `on-success / success` | 11.13:1 | 4.5:1 | yes |
| `on-info / info` | 7.51:1 | 4.5:1 | yes |
| `primary / background` | 15.72:1 | 3:1 | yes |
| `primary / surface` | 14.23:1 | 4.5:1 | yes |
| `secondary / surface` | 7.11:1 | 4.5:1 | yes |
| `error / surface` | 6.21:1 | 4.5:1 | yes |
| `warning / surface` | 10.41:1 | 4.5:1 | yes |
| `success / surface` | 10.08:1 | 4.5:1 | yes |
| `info / surface` | 6.80:1 | 4.5:1 | yes |
| `hero-contrast / hero-start` | 17.93:1 | 4.5:1 | yes |
| `hero-contrast / hero-end` | 15.13:1 | 4.5:1 | yes |
