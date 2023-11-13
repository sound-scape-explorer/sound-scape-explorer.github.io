import {APP_NAME} from '@site/constants';

import {CodeBlock} from '../CodeBlock';

const block = `# Windows
${APP_NAME.toLowerCase()}_config C:\\to\\storage.h5

# Ubuntu / macOS
${APP_NAME.toLowerCase()}_config path/to/storage.h5`;

export const ConfigCommandBlock = () => (
  <CodeBlock
    language="bash"
    code={block}
  />
);
