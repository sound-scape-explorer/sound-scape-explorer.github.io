import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

const code = (command: string) => `# Windows
${command}_extract C:\\to\\storage.h5

# Ubuntu / macOS
${command}_extract path/to/storage.h5`;

interface Props {
  isCse?: boolean;
}

export const ExtractCommandBlock = ({isCse = false}: Props) => {
  const command = useMemo(() => {
    if (isCse) {
      return 'cse';
    }

    return APP_NAME.toLowerCase();
  }, [isCse]);

  return <CodeBlock language="bash">{code(command)}</CodeBlock>;
};
