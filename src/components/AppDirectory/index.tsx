import {useVersionReplacer} from '@site/hooks/useVersionReplacer';

import {CodeInline} from '../CodeInline';

interface Props {
  version?: string;
}

export const AppDirectory = ({version}: Props) => {
  const {directory} = useVersionReplacer(version);
  return <CodeInline>{directory}</CodeInline>;
};
