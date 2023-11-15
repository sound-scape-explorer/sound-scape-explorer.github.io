import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

export const ExportingBlogBlock = () => {
  const code = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;

    return `npx docs-to-pdf \\
--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\
--contentSelector="article" \\
--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\
--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\
--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\
--cssStyle=":root{background: transparent}" \\
--coverTitle="SoundScapeExplorer Blog ${dateString}" \\
--outputPDFFilename="SoundScapeExplorer-blog-${dateString}.pdf"`;
  }, []);

  return <CodeBlock language="bash">{code}</CodeBlock>;
};
