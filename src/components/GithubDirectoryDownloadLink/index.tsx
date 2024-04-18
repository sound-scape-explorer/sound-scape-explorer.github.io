import versions from '@site/versions.json';
import {useMemo} from 'react';

import {SizeInfo} from '../SizeInfo';

interface Props {
  version: string;
  folderPath: string;
  name: string;
  size: string;
  isCse?: boolean;
}

const toolBaseUrl = 'https://download-directory.github.io/?url=';
const sseBaseUrl =
  'https://github.com/sound-scape-explorer/sound-scape-explorer/tree';
const cseBaseUrl =
  'https://github.com/sound-scape-explorer/coral-sound-explorer/tree';

export const GithubDirectoryDownloadLink = ({
  version,
  folderPath,
  name,
  size,
  isCse = false,
}: Props) => {
  const versionName = useMemo(() => {
    const latestVersion = versions[0];

    if (version === latestVersion) {
      return 'main';
    }

    return `v${version}`;
  }, [version]);

  const appBaseUrl = useMemo(() => {
    if (isCse) {
      return cseBaseUrl;
    }

    return sseBaseUrl;
  }, [isCse]);

  const fullUrl = useMemo(() => {
    let fullPath = '';
    fullPath += toolBaseUrl;
    const folderUrl = `${appBaseUrl}/${versionName}/${folderPath}`;
    fullPath += encodeURI(folderUrl);
    return fullPath;
  }, [toolBaseUrl, folderPath, versionName]);

  return (
    <>
      <a
        href={fullUrl}
        target={'_blank'}
        rel={'noopener noreferrer'}
        itemProp={'url'}
      >
        {name}
      </a>
      <SizeInfo size={size} />
    </>
  );
};
