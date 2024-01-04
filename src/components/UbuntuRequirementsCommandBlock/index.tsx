import CodeBlock from '@theme/CodeBlock';

interface Props {
  version: string;
  isCse?: boolean;
}

const code = (version: Props['version']) =>
  `/bin/bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/bin/requirements-ubuntu.sh)`;

const codeCse = (version: Props['version']) =>
  `/bin/bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/coral-sound-explorer/v${version}/bin/requirements-ubuntu.sh)`;
export const UbuntuRequirementsCommandBlock = ({
  version,
  isCse = false,
}: Props) => {
  if (isCse) {
    return <CodeBlock language={'bash'}>{codeCse(version)}</CodeBlock>;
  }

  return <CodeBlock language={'bash'}>{code(version)}</CodeBlock>;
};
