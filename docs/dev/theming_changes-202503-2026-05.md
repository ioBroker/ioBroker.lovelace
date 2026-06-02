# Theming changes: HA frontend 20250401 → 20260527

The frontend theme engine was rewritten. Old custom themes mostly still work
(legacy variables are kept), but a few things changed that explain visual
regressions — most notably **white text-field / input backgrounds**.

---

## TL;DR — why text fields are white

Several input components were migrated to new components (new dependency
`@home-assistant/webawesome`). Their background is no longer read from the old
`--mdc-text-field-fill-color` / `--input-fill-color` variables, but from a single
new semantic token:

```
--ha-color-form-background
  ├─ light default: --ha-color-neutral-95  ≈ #f3f3f3 (near-white)
  └─ dark  default: --ha-color-neutral-20  ≈ #363636 (dark)
```

The dark default only applies **when dark mode is active**. The token does **not**
follow `--card-background-color`. So a custom dark-styled theme that only sets
`card-background-color` + `--mdc-text-field-*` (and isn't applied via dark mode)
keeps the near-white light default → **white fields**.

Defined in `src/resources/theme/color/semantic.globals.ts` (light line 173, dark
line 329). Consumed by `src/components/input/wa-input-mixin.ts` and the new input
components (`ha-textarea`, `ha-picker-field`, `ha-base-time-input`, `ha-checkbox`,
`ha-input`, …).

### Fix for theme authors

Set the new form-background token (and its hover/disabled variants):

```yaml
my_theme:
  ha-color-form-background: "var(--card-background-color)"
  ha-color-form-background-hover: "var(--light-primary-color)"
  ha-color-form-background-disabled: "var(--primary-background-color)"
```

If your theme is meant to be dark, prefer the **modes** mechanism (see below) so
light/dark both look right — then the dark defaults of the new tokens apply
automatically and you may not need to set the token explicitly.

---

## What changed structurally

### 1. New layered color-token system

Three layers now exist (all live on `html`, bundled in the frontend):

| Layer | Example variables | Purpose |
|-------|-------------------|---------|
| **Core** | `--ha-color-primary-50`, `--ha-color-neutral-90`, `--ha-color-red-50` … (hues × 05–95) | Raw palette. Not meant to be used directly. |
| **Semantic** | `--ha-color-fill-neutral-normal-resting`, `--ha-color-text-primary`, `--ha-color-border-neutral-quiet`, `--ha-color-surface-*` | UI-purpose tokens, derived from core. |
| **Legacy (compat)** | `--card-background-color`, `--primary-text-color`, `--primary-color`, `--secondary-background-color` … | Still present, still work. |

Old themes that set legacy variables keep working — the compat layer is intact.
New components increasingly read **semantic** or **`--wa-*`** tokens, which sparse
legacy-only themes don't override.

### 2. Web Awesome components added

New dependency `@home-assistant/webawesome@3.7.0`. Migrated components include:
`ha-select`, `ha-textarea`, `ha-slider`, `ha-switch`, `ha-spinner`,
`ha-tooltip`, `ha-tab-group`, `ha-target-picker`, number selector, and more.

These read `--wa-*` variables, which are bridged to `--ha-color-*` tokens in the
frontend. Relevant ones for theme authors:

```
--wa-color-surface-default      → --card-background-color
--wa-color-surface-raised       → --ha-dialog-surface-background → --mdc-theme-surface → --card-background-color → #fff
--wa-form-control-background-color  → --wa-color-surface-raised
--wa-form-control-value-color       → --primary-text-color
--wa-form-control-placeholder-color → --ha-color-text-secondary
--wa-color-text-normal              → --primary-text-color
--wa-focus-ring-color               → --ha-color-focus
```

### 3. `primary-color` now auto-generates a palette

When a theme (or the default theme's primary-color setting) sets `primary-color`,
the frontend now runs `generateColorPalette()` and fills the whole
`--ha-color-primary-05 … 95` ramp plus `light-primary-color`,
`dark-primary-color`, and a new `darker-primary-color`. So a single
`primary-color` cascades into the new tokens automatically. **Surfaces and
backgrounds are NOT auto-derived** — set them explicitly.

### 4. Dark mode application changed

- Old: dark mode applied a single `darkStyles` blob.
- New: dark mode applies `darkSemanticVariables` + `darkColorVariables` (the dark
  values of the new token layers) **only when dark mode is actually active**.

Consequence: a custom theme that is "dark-looking" but is applied in **light**
mode (no `modes`, dark mode off) starts from the **light** `--ha-color-*`
defaults. Anything it doesn't explicitly override stays light → white fields,
light surfaces, etc.

### 5. Files removed (internal — affects themes that referenced internals)

- `src/resources/ha-style.ts` (449 lines) — removed
- `src/resources/styles-data.ts` (`darkStyles`, `derivedStyles`) — removed
- Replaced by `src/resources/theme/**` (`color/core`, `color/semantic`,
  `color/color`, `color/wa`, `typography`, `animations`, …)

Themes only using documented HA variables are unaffected. Themes that copied
internal variable names from those files may break.

---

## Recommended theme template (works light + dark)

Use the `modes` block so HA picks the right set per light/dark:

```yaml
my_theme:
  # shared
  primary-color: "#18bcf2"
  accent-color: "#f36d00"
  modes:
    light:
      primary-background-color: "#fafafa"
      card-background-color: "#ffffff"
      secondary-background-color: "#e5e5e5"
      primary-text-color: "#212121"
      secondary-text-color: "#727272"
    dark:
      primary-background-color: "#111111"
      card-background-color: "#1c1c1c"
      secondary-background-color: "#282828"
      primary-text-color: "#e1e1e1"
      secondary-text-color: "#9b9b9b"
      ha-color-form-background: "#1c1c1c"
      ha-color-form-background-hover: "#282828"
      ha-color-form-background-disabled: "#111111"
```

Using `modes` lets the frontend apply the dark defaults of the new tokens
automatically. For a dark theme **without** `modes` (or applied in light mode),
set `ha-color-form-background` explicitly — that's what keeps the new input fields
correctly colored.

---

## Adapter-side notes

- The adapter serves themes via `frontend/get_themes` (`_getThemes()` in
  `src/lib/server.ts`) from the YAML in adapter config. It does **not** bundle the
  new token defaults — those ship inside the frontend itself.
- No adapter code change is required for theming to work; the white-field issue is
  resolved by **theme content** (add `ha-color-form-background`), not by the adapter.
- If we ship example/default themes, add `ha-color-form-background` (and ideally the
  `modes` block) so out-of-the-box themes don't show white fields.
