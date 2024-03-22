import CodeBlock from '@theme/CodeBlock';

const code = (version: string) => `sudo echo && \\
wget https://github.com/sound-scape-explorer/sound-scape-explorer/releases/download/v${version}/sound-scape-explorer-${version}.deb && \\
sudo dpkg -i sound-scape-explorer-${version}.deb && \\
rm -f sound-scape-explorer-${version}.deb`;

interface Props {
  version: string;
}

export const VisualisationBlockDebian = ({version}: Props) => {
  return <CodeBlock language="bash">{code(version)}</CodeBlock>;
};
