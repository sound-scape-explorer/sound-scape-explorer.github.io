import {APP_DIRECTORY} from '@site/constants';
import {useMemo} from 'react';

interface UseVersionReplacer {
  directory: string;
}

export function useVersionReplacer(version?: string): UseVersionReplacer {
  const directory = useMemo(() => {
    let directory = APP_DIRECTORY;

    if (version) {
      directory = APP_DIRECTORY.replace('VERSION', version);
    }

    return directory;
  }, [version]);

  return {directory: directory};
}
