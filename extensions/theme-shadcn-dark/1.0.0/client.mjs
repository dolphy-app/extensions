var theme_default$1 = {
	id: "theme-shadcn-dark",
	label: "shadcn Dark",
	dark: true,
	colors: {
		"background": "#0A0A0A",
		"surface": "#171717",
		"surface-bright": "#262626",
		"surface-light": "#262626",
		"surface-variant": "#262626",
		"on-background": "#FAFAFA",
		"on-surface": "#FAFAFA",
		"on-surface-variant": "#A1A1A1",
		"primary": "#E5E5E5",
		"on-primary": "#171717",
		"secondary": "#A3A3A3",
		"on-secondary": "#0A0A0A",
		"error": "#FF6467",
		"on-error": "#0A0A0A",
		"warning": "#FFB900",
		"on-warning": "#0A0A0A",
		"success": "#05DF72",
		"on-success": "#0A0A0A",
		"info": "#51A2FF",
		"on-info": "#0A0A0A",
		"hero-start": "#262626",
		"hero-end": "#404040",
		"hero-contrast": "#FFFFFF"
	},
	variables: {
		"border-color": "#FFFFFF",
		"border-opacity": .1
	},
	tokens: {
		"radius-sm": "0.375rem",
		"radius-md": "0.5rem",
		"radius-lg": "0.625rem",
		"radius-xl": "0.875rem",
		"font-family": "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
	}
};
// extensions/theme-shadcn-dark/src/theme.css?inline
var theme_default = ":root{--sh-border:#ffffff1a;--sh-input:#ffffff26;--sh-input-solid:#404040;--sh-secondary-bg:#262626;--sh-secondary-fg:#fafafa;--sh-ring:#737373;--sh-ring-soft:#73737380;--sh-accent:#404040;--sh-outline-bg:#ffffff0a;--sh-tab-active:#ffffff14;--sh-shadow-xs:0 1px 2px 0 #0000000d;--sh-shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--sh-shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a}.v-application{-webkit-font-smoothing:antialiased;font-feature-settings:\"cv11\", \"ss03\"}.v-btn:focus-visible,.v-chip:focus-visible{box-shadow:0 0 0 3px var(--sh-ring-soft);outline:none}.v-btn{--v-btn-height:2.25rem;border-radius:var(--dolphy-radius-md);letter-spacing:0;box-shadow:none;font-size:.875rem;font-weight:500}.v-btn.v-btn--size-small{--v-btn-height:2rem;border-radius:var(--dolphy-radius-sm)}.v-btn.v-btn--size-large{--v-btn-height:2.5rem}.v-btn.bg-secondary.v-btn--variant-elevated,.v-btn.bg-secondary.v-btn--variant-flat{background-color:var(--sh-secondary-bg);color:var(--sh-secondary-fg)}.v-btn--icon{border-radius:var(--dolphy-radius-md)}.v-btn--variant-elevated,.v-btn--variant-flat{box-shadow:none}.v-btn--variant-outlined{border:1px solid var(--sh-input);background-color:var(--sh-outline-bg);box-shadow:var(--sh-shadow-xs)}.v-btn--variant-outlined .v-btn__overlay{display:none}.v-btn--variant-outlined:hover,.v-btn--variant-outlined.v-btn--active{background-color:var(--sh-accent)}.v-btn:active{scale:.98}.v-field{--v-input-control-height:2.25rem;--v-field-padding-top:.375rem;--v-field-padding-bottom:.375rem;--v-field-input-padding-top:.375rem;--v-field-input-padding-bottom:.375rem;border-radius:var(--dolphy-radius-md);font-size:.875rem}.v-field--variant-outlined{box-shadow:var(--sh-shadow-xs)}.v-field--variant-outlined .v-field__outline{--v-field-border-width:1px;--v-field-border-opacity:1;color:var(--sh-input)}.v-field--variant-outlined.v-field--focused{box-shadow:0 0 0 3px var(--sh-ring-soft)}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width:1px;color:var(--sh-ring)}.v-field--variant-outlined.v-field--error .v-field__outline{color:rgb(var(--v-theme-error))}.v-field--variant-outlined.v-field--error.v-field--focused{box-shadow:0 0 0 3px color-mix(in oklab, rgb(var(--v-theme-error)) 20%, transparent)}.v-field--variant-outlined input::placeholder,.v-field--variant-outlined textarea::placeholder{color:rgb(var(--v-theme-on-surface-variant))}.v-card{border-radius:var(--dolphy-radius-xl);box-shadow:var(--sh-shadow-xs)}.v-card-title{letter-spacing:0;font-size:1rem;font-weight:600;line-height:1}.v-card-subtitle{opacity:1;color:rgb(var(--v-theme-on-surface-variant));font-size:.875rem}.v-chip{--v-chip-height:1.375rem;border-radius:var(--dolphy-radius-md);letter-spacing:0;font-size:.75rem;font-weight:500}.v-alert{border:1px solid var(--sh-border);border-radius:var(--dolphy-radius-lg);background:rgb(var(--v-theme-surface));color:rgb(var(--v-theme-on-surface));padding:.75rem 1rem;font-size:.875rem;line-height:1.25rem}.v-alert .v-alert__underlay,.v-alert .v-alert__overlay{display:none}.v-alert .v-alert__prepend{align-self:flex-start;margin-inline-end:.75rem}.v-alert .v-alert__prepend .v-icon{width:1rem;height:1rem;margin-top:.125rem;font-size:1rem}.v-alert .v-alert-title{letter-spacing:-.0125em;font-size:.875rem;font-weight:500;line-height:1.25rem}.v-alert .v-alert__content{color:rgb(var(--v-theme-on-surface-variant));letter-spacing:0;font-size:.875rem}.v-alert .v-alert-title{color:rgb(var(--v-theme-on-surface))}.v-alert.bg-error .v-alert-title,.v-alert.text-error .v-alert-title{color:rgb(var(--v-theme-error))}.v-alert.bg-info .v-alert__prepend .v-icon,.v-alert.text-info .v-alert__prepend .v-icon{color:rgb(var(--v-theme-info))}.v-alert.bg-success .v-alert__prepend .v-icon,.v-alert.text-success .v-alert__prepend .v-icon{color:rgb(var(--v-theme-success))}.v-alert.bg-warning .v-alert__prepend .v-icon,.v-alert.text-warning .v-alert__prepend .v-icon{color:rgb(var(--v-theme-warning))}.v-alert.bg-error,.v-alert.text-error{color:rgb(var(--v-theme-error))}.v-alert.bg-error .v-alert__content,.v-alert.text-error .v-alert__content{color:color-mix(in oklab, rgb(var(--v-theme-error)) 90%, transparent)}.v-tabs{--v-tabs-height:2.25rem;border-radius:var(--dolphy-radius-lg);background-color:rgb(var(--v-theme-surface-variant));width:-moz-fit-content;width:fit-content;max-width:100%;color:rgb(var(--v-theme-on-surface-variant));padding:3px}.v-tab.v-btn{border-radius:var(--dolphy-radius-md);letter-spacing:0;text-transform:none;min-width:0;height:calc(100% - 1px);padding-inline:.5rem;font-size:.875rem;font-weight:500}.v-tab.v-tab--selected{background-color:var(--sh-tab-active);color:rgb(var(--v-theme-on-surface));box-shadow:var(--sh-shadow-xs)}.v-tab .v-tab__slider{display:none}.v-expansion-panels{display:block}.v-expansion-panel{box-shadow:none;border-bottom:1px solid var(--sh-border);color:inherit;background:0 0;border-radius:0}.v-expansion-panel:after,.v-expansion-panel__shadow{display:none}.v-expansion-panel--active:not(:first-child),.v-expansion-panel--active+.v-expansion-panel{margin-top:0}.v-expansion-panel-title{border-radius:var(--dolphy-radius-md);letter-spacing:0;gap:1rem;min-height:0;padding:1rem 0;font-size:.875rem;font-weight:500;line-height:1.25rem}.v-expansion-panel-title:hover{text-decoration:underline}.v-expansion-panel-title--active{min-height:0}.v-expansion-panel-title__overlay{display:none}.v-expansion-panel-title:focus-visible{box-shadow:0 0 0 3px var(--sh-ring-soft)}.v-expansion-panel-title__icon{color:rgb(var(--v-theme-on-surface-variant));margin-inline-start:0}.v-expansion-panel-title__icon .v-icon{width:1rem;height:1rem;font-size:1rem}.v-expansion-panel-text__wrapper{padding:0 0 1rem;font-size:.875rem;line-height:1.25rem}.v-list{background:0 0}.v-list-item{border-radius:var(--dolphy-radius-sm);min-height:2rem;font-size:.875rem}.v-menu>.v-overlay__content>.v-list,.v-menu>.v-overlay__content>.v-card{border:1px solid var(--sh-border);border-radius:var(--dolphy-radius-md);background-color:rgb(var(--v-theme-surface-bright));box-shadow:var(--sh-shadow-md);padding:.25rem}.v-overlay__scrim{opacity:.5;background:#000}.v-dialog>.v-overlay__content>.v-card{border-radius:var(--dolphy-radius-lg);box-shadow:var(--sh-shadow-lg);padding:.5rem}.v-dialog .v-card-title{letter-spacing:0;font-size:1.125rem;font-weight:600}.v-dialog .v-card-text{color:rgb(var(--v-theme-on-surface-variant));font-size:.875rem}.v-tooltip>.v-overlay__content{border-radius:var(--dolphy-radius-md);background:rgb(var(--v-theme-primary));color:rgb(var(--v-theme-on-primary));padding:.375rem .75rem;font-size:.75rem}.v-progress-linear{border-radius:9999px}.v-progress-linear.v-progress-linear--active{height:.5rem!important}.v-progress-linear .v-progress-linear__background{background:color-mix(in oklab, rgb(var(--v-theme-primary)) 20%, transparent)}.v-progress-linear .v-progress-linear__determinate,.v-progress-linear .v-progress-linear__indeterminate .v-progress-linear__indeterminate{border-radius:9999px}.v-switch .v-switch__track{background:var(--sh-input-solid);opacity:1;width:2rem;min-width:2rem;height:1.15rem;box-shadow:none;border-radius:9999px}.v-switch .v-selection-control--dirty .v-switch__track{background:rgb(var(--v-theme-primary))}.v-switch .v-switch__thumb{background:rgb(var(--v-theme-surface));width:1rem;height:1rem;box-shadow:none;color:#0000}.v-switch .v-selection-control--dirty .v-switch__thumb{background:rgb(var(--v-theme-on-primary))}.v-list-item .v-list-item-title{letter-spacing:0;font-size:.875rem;line-height:1.25rem}.v-list-item .v-list-item-subtitle{letter-spacing:0;font-size:.75rem}.v-card-text,.v-label,.v-field__input,.v-input__details,.v-messages{letter-spacing:0}.v-divider{opacity:1;border-color:var(--sh-border)}";
// extensions/theme-shadcn-dark/src/index.ts
var face = (id, file, range) => `@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url('dolphy-ext://${id}/assets/fonts/${file}') format('woff2-variations');unicode-range:${range}}`;
var CYRILLIC = "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116";
var LATIN = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";
var client = (client) => {
	const id = client.extensionId;
	client.addTheme({
		...theme_default$1,
		css: face(id, "inter-cyrillic-wght-normal.woff2", CYRILLIC) + face(id, "inter-latin-wght-normal.woff2", LATIN) + theme_default
	});
};
export { client };
