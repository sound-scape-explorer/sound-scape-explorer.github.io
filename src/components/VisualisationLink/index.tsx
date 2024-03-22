import {SizeInfo} from '@site/src/components/SizeInfo';
import {useMemo} from 'react';

interface Props {
  version: string;
  size: string;
  system: 'windows' | 'debian' | 'macos';
}

export function VisualisationLink({version, size, system}: Props) {
  const extension = useMemo(() => {
    if (system === 'windows') {
      return 'exe';
    }

    if (system === 'debian') {
      return 'deb';
    }

    if (system === 'macos') {
      return 'dmg';
    }
  }, [system]);

  return (
    <>
      <a
        href={`https://github.com/sound-scape-explorer/sound-scape-explorer/releases/download/v${version}/sound-scape-explorer-${version}.${extension}`}
        target="_blank"
      >
        sound-scape-explorer-{version}.{extension}
      </a>{' '}
      {size && <SizeInfo size={size} />}
    </>
  );
}
