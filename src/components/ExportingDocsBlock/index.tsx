import {APP_DESCRIPTION} from '@site/constants';
import versions from '@site/versions.json';
import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

interface Props {
  next?: boolean;
  version?: string;
  isCse?: boolean;
}

export const ExportingDocsBlock = ({next, version, isCse = false}: Props) => {
  const code = useMemo(() => {
    let endpoint = `https://sound-scape-explorer.github.io/docs/${version}`;
    let titleSuffix = '';
    let fileSuffix = '';
    let appName = APP_DESCRIPTION;

    if (isCse) {
      endpoint = 'https://sound-scape-explorer.github.io/docs/CSE';
      appName = 'CoralSoundExplorer';
    }

    const latestReleasedVersion = versions[0];
    const isCurrentVersion = version === latestReleasedVersion;
    if (isCurrentVersion) {
      endpoint = 'https://sound-scape-explorer.github.io/docs';
    }

    if (next) {
      titleSuffix = ' Next';
      fileSuffix = '-next';
      endpoint = 'https://sound-scape-explorer.github.io/docs/next';
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
--coverTitle="${appName} Docs${titleSuffix}" \\
--outputPDFFilename="${appName}-docs${fileSuffix}.pdf"`;
  }, [isCse]);

  return <CodeBlock language="bash">{code}</CodeBlock>;
};
