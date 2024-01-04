import {useVersionReplacer} from '@site/hooks/useVersionReplacer';

import {CodeInline} from '../CodeInline';

interface Props {
  version?: string;
  isCse?: boolean;
}

export const ExampleDirectory = ({version, isCse = false}: Props) => {
  const {directory} = useVersionReplacer({version: version, isCse: isCse});

  if (isCse) {
    return <CodeInline>{directory}/examples/campaigns</CodeInline>;
  }

  return <CodeInline>{directory}/examples/campaigns</CodeInline>;
};
