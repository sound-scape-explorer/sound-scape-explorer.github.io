interface Props {
  children: string;
  version: string;
  isCse?: boolean;
}

export const ExcelFile = ({children, version, isCse = false}: Props) => {
  if (isCse) {
    return (
      <a
        href={`https://raw.githubusercontent.com/sound-scape-explorer/coral-sound-explorer/v${version}/examples/campaigns/new-campaign/config.xlsx`}
        download
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={`https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/examples/campaigns/new-campaign/config.xlsx`}
      download
    >
      {children}
    </a>
  );
};
