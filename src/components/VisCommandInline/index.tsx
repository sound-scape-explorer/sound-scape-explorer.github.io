import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

interface Props {
  isCse?: boolean;
}

export const VisCommandInline = ({isCse = false}: Props) => {
  if (isCse) {
    return <CodeInline>cse_vis</CodeInline>;
  }

  return <CodeInline>{APP_NAME.toLowerCase()}_vis</CodeInline>;
};
