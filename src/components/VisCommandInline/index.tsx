import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

export const VisCommandInline = () => (
  <CodeInline>{APP_NAME.toLowerCase()}_vis</CodeInline>
);
