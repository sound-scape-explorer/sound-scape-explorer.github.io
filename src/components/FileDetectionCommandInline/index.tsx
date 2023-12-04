import {APP_NAME} from '@site/constants';

import {CodeInline} from '../CodeInline';

export const FileDetectionCommandInline = () => (
  <CodeInline>{APP_NAME.toLowerCase()}_fill</CodeInline>
);
