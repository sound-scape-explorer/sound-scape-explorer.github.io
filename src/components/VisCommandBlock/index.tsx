import {APP_NAME} from '@site/constants';

import {CodeBlock} from '../CodeBlock';

const block = `# Windows
${APP_NAME.toLowerCase()}_vis C:\\path\\to\\config.xlsx

# Ubuntu / macOS
(venv)$> ${APP_NAME.toLowerCase()}_vis /path/to/config.xlsx`;

export const VisCommandBlock = () => (
  <CodeBlock
    language="bash"
    code={block}
  />
);
