import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

export const ConfigCommandInline = () => (
  <CodeInline>{APP_NAME.toLowerCase()}_config</CodeInline>
);
