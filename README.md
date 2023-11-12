# SoundScapeExplorer website

## Requirements

- Node.js 18

## Export docs as PDF

```bash
npx docs-to-pdf --initialDocURLs="https://sound-scape-explorer.github.io/docs" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://sound-scape-explorer.github.io/img/sse.png" --coverTitle="SoundScapeExplorer Docs" --outputPDFFilename="SoundScapeExplorer-docs.pdf"
```

## Export blog as PDF

```bash
npx docs-to-pdf --initialDocURLs="https://sound-scape-explorer.github.io/blog/index" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://sound-scape-explorer.github.io/img/sse.png" --coverTitle="SoundScapeExplorer Blog" --outputPDFFilename="SoundScapeExplorer-blog.pdf"
```
