import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = `# Windows
${APP_NAME.toLowerCase()}_vis C:\\path\\to\\config.xlsx

# Ubuntu / macOS
(venv)$> ${APP_NAME.toLowerCase()}_vis /path/to/config.xlsx`;

export const VisCommandBlock = () => (
  <CodeBlock language="bash">{code}</CodeBlock>
);
