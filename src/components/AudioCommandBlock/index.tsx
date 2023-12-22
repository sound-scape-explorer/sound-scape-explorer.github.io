import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = `# Windows
${APP_NAME.toLowerCase()}_audio C:\\path\\to\\config.xlsx

# Ubuntu / macOS
(venv)$> ${APP_NAME.toLowerCase()}_audio /path/to/config.xlsx`;

export const AudioCommandBlock = () => (
  <CodeBlock language="bash">{code}</CodeBlock>
);
