import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

export const VizCommandInline = () => (
  <CodeInline>{APP_NAME.toLowerCase()}_viz</CodeInline>
);
