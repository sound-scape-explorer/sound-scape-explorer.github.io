import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

const code = (command: string) => `# Windows
${command}_audio C:\\path\\to\\config.xlsx

# Ubuntu / macOS
(venv)$> ${command}_audio /path/to/config.xlsx`;

interface Props {
  isCse?: boolean;
}

export const AudioCommandBlock = ({isCse = false}: Props) => {
  const command = useMemo(() => {
    if (isCse) {
      return 'cse';
    }

    return APP_NAME.toLowerCase();
  }, [isCse]);

  return <CodeBlock language="bash">{code(command)}</CodeBlock>;
};
