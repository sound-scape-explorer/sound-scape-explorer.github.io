import {APP_NAME} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

interface Props {
  isCse?: boolean;
}

const code = (command: string) => `# Windows
${command} D:\\campaign\\config.xlsx

# Ubuntu / macOS
${command} campaign/config.xlsx`;

export const ProcessingCommandBlock = ({isCse = false}: Props) => {
  const command = useMemo(() => {
    if (isCse) {
      return 'cse';
    }

    return APP_NAME.toLowerCase();
  }, [isCse]);

  return <CodeBlock language="bash">{code(command)}</CodeBlock>;
};
