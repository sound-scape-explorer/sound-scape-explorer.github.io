import {useVersionReplacer} from '@site/hooks/useVersionReplacer';

import {CodeInline} from '../CodeInline';

interface Props {
  version?: string;
  isCse?: boolean;
}

export const AppDirectory = ({version, isCse = false}: Props) => {
  const {directory} = useVersionReplacer({version: version, isCse: isCse});
  return <CodeInline>{directory}</CodeInline>;
};
