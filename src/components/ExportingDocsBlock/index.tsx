import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

interface Props {
  next?: boolean;
  version?: string;
}

export const ExportingDocsBlock = ({next, version}: Props) => {
  const code = useMemo(() => {
    let endpoint = 'https://sound-scape-explorer.github.io/docs';
    let titleSuffix = '';
    let fileSuffix = '';

    if (next) {
      titleSuffix = ' Next';
      fileSuffix = '-next';
      endpoint += '/next';
    } else {
      titleSuffix = version ? ` ${version}` : '';
      fileSuffix = version ? `-${version}` : '';
    }

    return `npx docs-to-pdf \\
--initialDocURLs="${endpoint}" \\
--contentSelector="article" \\
--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\
--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\
--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\
--cssStyle=":root{background: transparent}" \\
--coverTitle="SoundScapeExplorer Docs${titleSuffix}" \\
--outputPDFFilename="SoundScapeExplorer-docs${fileSuffix}.pdf"`;
  }, []);

  return <CodeBlock language="bash">{code}</CodeBlock>;
};
