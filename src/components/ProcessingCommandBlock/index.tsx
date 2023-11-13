import {APP_NAME} from '@site/constants';

import {CodeBlock} from '../CodeBlock';

const commandBlock = `# Windows
${APP_NAME.toLowerCase()} C:\\to\\file.xlsx

# Ubuntu / macOS
${APP_NAME.toLowerCase()} path/to/file.xlsx`;

export const ProcessingCommandBlock = () => (
  <CodeBlock
    language="bash"
    code={commandBlock}
  />
);
