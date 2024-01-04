import {APP_DIRECTORY} from '@site/constants';
import {useMemo} from 'react';

interface UseVersionReplacer {
  directory: string;
}

interface Props {
  version?: string;
  isCse?: boolean;
}

export function useVersionReplacer({
  version,
  isCse = false,
}: Props): UseVersionReplacer {
  const directory = useMemo(() => {
    let directory = APP_DIRECTORY;

    if (version && isCse) {
      directory = 'coral-sound-explorer-VERSION'.replace('VERSION', version);
    } else if (version) {
      directory = APP_DIRECTORY.replace('VERSION', version);
    }

    return directory;
  }, [version]);

  return {directory: directory};
}
