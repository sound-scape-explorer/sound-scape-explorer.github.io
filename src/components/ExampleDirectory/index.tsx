import {useVersionReplacer} from '@site/hooks/useVersionReplacer';

import {CodeInline} from '../CodeInline';

interface Props {
  version?: string;
}

export const ExampleDirectory = ({version}: Props) => {
  const {directory} = useVersionReplacer(version);
  return <CodeInline>{directory}/examples/campaigns</CodeInline>;
};
