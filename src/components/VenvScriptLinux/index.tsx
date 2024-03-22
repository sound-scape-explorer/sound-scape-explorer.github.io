import CodeBlock from '@theme/CodeBlock';

const code = (version: string) =>
  `wget -q https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/bin/sse-processing-${version}.sh && chmod +x sse-processing-${version}.sh`;

interface Props {
  version: string;
}

export const VenvScriptLinux = ({version}: Props) => {
  return <CodeBlock language="bash">{code(version)}</CodeBlock>;
};
