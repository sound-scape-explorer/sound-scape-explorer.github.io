import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = `# Windows
${APP_NAME.toLowerCase()} D:\\campaign\\config.xlsx

# Ubuntu / macOS
${APP_NAME.toLowerCase()} campaign/config.xlsx`;

export const ProcessingCommandBlock = () => (
  <CodeBlock language="bash">{code}</CodeBlock>
);
