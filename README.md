# ATEN Direct Energy — Hugo + JavaScript multilingual site

This project converts the single-page ATEN Direct Energy website into a Hugo static site with English, Polish, and French language versions.

## Structure

- `hugo.toml` — Hugo multilingual configuration
- `layouts/index.html` — shared homepage template
- `data/home/en.yaml` — English copy
- `data/home/pl.yaml` — Polish copy
- `data/home/fr.yaml` — French copy
- `static/css/main.css` — ATEN styling, light/dark theme variables, responsive layout
- `static/js/theme.js` — light/dark mode toggle with `localStorage`
- `content/_index.*.md` — language homepage entries

## Run locally

Install Hugo Extended, then run:

```bash
hugo server --disableFastRender
```

Open the local URL Hugo prints in the terminal.

## Build

```bash
hugo --minify
```

The generated static site will be created in `public/`.

## Language URLs

- English: `/`
- Polish: `/pl/`
- French: `/fr/`

Update copy by editing the YAML files in `data/home/`.
