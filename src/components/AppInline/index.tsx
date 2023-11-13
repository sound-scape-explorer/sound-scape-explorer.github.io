import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

export const AppInline = () => (
  <CodeInline>{APP_NAME.toLowerCase()}</CodeInline>
);
