import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = `# Windows
${APP_NAME.toLowerCase()}_fill C:\\to\\config.xlsx

# Ubuntu / macOS
${APP_NAME.toLowerCase()}_fill path/to/config.xlsx`;

export const FileDetectionCommandBlock = () => (
  <CodeBlock language="bash">{code}</CodeBlock>
);
