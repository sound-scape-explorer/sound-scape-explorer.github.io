import versions from '@site/versions';
import {useMemo} from 'react';

import {SizeInfo} from '../SizeInfo';

interface Props {
  version: string;
  folderPath: string;
  name: string;
  size: string;
}

const toolBaseUrl = 'https://download-directory.github.io/?url=';
const appBaseUrl =
  'https://github.com/sound-scape-explorer/sound-scape-explorer/tree';

export const GithubDirectoryDownloadLink = ({
  version,
  folderPath,
  name,
  size,
}: Props) => {
  const versionName = useMemo(() => {
    const latestVersion = versions[0];

    if (version === latestVersion) {
      return 'main';
    }

    return version;
  }, [version]);

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
