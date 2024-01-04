import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

interface Props {
  isCse?: boolean;
}

export const VizCommandInline = ({isCse = false}: Props) => {
  if (isCse) {
    return <CodeInline>cse_viz</CodeInline>;
  }

  return <CodeInline>{APP_NAME.toLowerCase()}_viz</CodeInline>;
};
