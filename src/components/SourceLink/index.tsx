import {useVersionReplacer} from '@site/hooks/useVersionReplacer';

import {SizeInfo} from '../SizeInfo';

interface Props {
  version: string;
  size: string;
  isCse?: boolean;
}

export const SourceLink = ({version, size, isCse = false}: Props) => {
  const {directory} = useVersionReplacer({version: version, isCse: isCse});

  if (isCse) {
    return (
      <>
        <a
          href={`https://github.com/sound-scape-explorer/coral-sound-explorer/archive/refs/tags/v${version}.zip`}
          target="_blank"
        >
          {directory}.zip
        </a>{' '}
        {size && <SizeInfo size={size} />}
      </>
    );
  }

  return (
    <>
      <a
        href={`https://github.com/sound-scape-explorer/sound-scape-explorer/archive/refs/tags/v${version}.zip`}
        target="_blank"
      >
        {directory}.zip
      </a>{' '}
      {size && <SizeInfo size={size} />}
    </>
  );
};
