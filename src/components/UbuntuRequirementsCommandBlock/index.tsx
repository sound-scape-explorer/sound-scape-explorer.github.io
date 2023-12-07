import CodeBlock from '@theme/CodeBlock';

interface Props {
  version: string;
}

const code = (version: Props['version']) =>
  `/bin/bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/bin/requirements-ubuntu.sh)`;

export const UbuntuRequirementsCommandBlock = ({version}: Props) => {
  return <CodeBlock language={'bash'}>{code(version)}</CodeBlock>;
};
