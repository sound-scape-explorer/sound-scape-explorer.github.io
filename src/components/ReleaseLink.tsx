interface Props {
  version: string;
}

export const ReleaseLink = ({version}: Props) => (
  <a
    href={`https://github.com/sound-scape-explorer/sound-scape-explorer/releases/tag/v${version}`}
    target="_blank"
  >
    v{version} release page
  </a>
);
