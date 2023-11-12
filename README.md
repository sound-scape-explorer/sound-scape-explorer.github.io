# SoundScapeExplorer website

## Requirements

- Node.js 18

## Export PDF

```bash
npx docs-to-pdf --initialDocURLs="https://sound-scape-explorer.github.io/docs/intro" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://sound-scape-explorer.github.io/img/sse.png" --coverTitle="SoundScapeExplorer"
```
