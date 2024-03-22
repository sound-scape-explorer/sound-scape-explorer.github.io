interface Props {
  version: string;
}

export function VenvScriptWindows({version}: Props) {
  return (
    <a
      href={`https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${version}/bin/sse-processing-${version}.bat`}
    >
      {`sse-processing-${version}.bat`}
    </a>
  );
}
