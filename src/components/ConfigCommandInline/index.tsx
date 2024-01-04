import {APP_NAME} from '@site/constants';
import {useMemo} from 'react';

import {CodeInline} from '../CodeInline';

interface Props {
  isCse?: boolean;
}

export const ConfigCommandInline = ({isCse = false}: Props) => {
  const command = useMemo(() => {
    if (isCse) {
      return 'cse';
    }

    return APP_NAME.toLowerCase();
  }, [isCse]);

  return <CodeInline>{command}_config</CodeInline>;
};
