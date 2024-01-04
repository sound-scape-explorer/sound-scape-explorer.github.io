import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

interface Props {
  isCse?: boolean;
}

export const AppInline = ({isCse = false}: Props) => {
  if (isCse) {
    return <CodeInline>cse</CodeInline>;
  }

  return <CodeInline>{APP_NAME.toLowerCase()}</CodeInline>;
};
