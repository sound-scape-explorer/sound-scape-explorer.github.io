import {useVersionReplacer} from '@site/hooks/useVersionReplacer';

import {SizeInfo} from '../SizeInfo';

interface Props {
  version: string;
  size: string;
}

export const SourceLink = ({version, size}: Props) => {
  const {directory} = useVersionReplacer(version);
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
