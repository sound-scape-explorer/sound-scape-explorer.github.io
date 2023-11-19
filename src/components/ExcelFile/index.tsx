interface Props {
  children: string;
  version: string;
}
export const ExcelFile = ({children, version}: Props) => (
  <a
    href={`https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/examples/campaigns/new-campaign/config.xlsx`}
    download
  >
    {children}
  </a>
);
