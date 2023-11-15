import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

interface Props {
  version?: string;
}

export const ExportingDocsBlock = ({version}: Props) => {
  const code = useMemo(() => {
    const titleSuffix = version ? ` ${version}` : '';
    const fileSuffix = version ? `-${version}` : '';

    return `npx docs-to-pdf \\
--initialDocURLs="https://sound-scape-explorer.github.io/docs" \\
--contentSelector="article" \\
--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\
--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\
--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\
--coverTitle="SoundScapeExplorer Docs${titleSuffix}" \\
--outputPDFFilename="SoundScapeExplorer-docs${fileSuffix}.pdf"`;
  }, []);

  return <CodeBlock language="bash">{code}</CodeBlock>;
};
