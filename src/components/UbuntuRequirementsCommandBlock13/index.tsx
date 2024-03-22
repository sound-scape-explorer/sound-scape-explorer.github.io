import CodeBlock from '@theme/CodeBlock';

interface Props {
  version: string;
  isCse?: boolean;
}

const code = (version: Props['version']) =>
  `bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/bin/install-requirements.sh)`;

export const UbuntuRequirementsCommandBlock13 = ({version}: Props) => {
  return <CodeBlock language={'bash'}>{code(version)}</CodeBlock>;
};
