import {
  CIcon,
  CurlIcon,
  FfmpegIcon,
  NodeIcon,
  PnpmIcon,
  PythonIcon,
  StorageIcon,
} from '@site/src/components/Icons';

interface Props {
  noPython?: boolean;
  noNode?: boolean;
  noPnpm?: boolean;
  noCCompiler?: boolean;
  noCurl?: boolean;
  noFfmpeg?: boolean;
  hdfTools?: boolean;
}

export const Dependencies = ({
  noPython = false,
  noNode = false,
  noPnpm = false,
  noCCompiler = false,
  noCurl = false,
  noFfmpeg = false,
  hdfTools = false,
}: Props) => {
  return (
    <ul>
      {!noPython && (
        <li>
          <PythonIcon />
          {'  '}
          <a
            href={'https://www.python.org/'}
            target={'_blank'}
          >
            {'Python'}
          </a>
          {' 3.10'}
        </li>
      )}
      {!noNode && (
        <li>
          <NodeIcon />
          {'  '}
          <a
            href={'https://nodejs.org/'}
            target={'_blank'}
          >
            {'Node.js'}
          </a>
        </li>
      )}
      {!noPnpm && (
        <li>
          <PnpmIcon />
          {'  '}
          <a
            href={'https://pnpm.io/'}
            target={'_blank'}
          >
            {'pnpm'}
          </a>
        </li>
      )}
      {!noCCompiler && (
        <li>
          <CIcon />
          {'  '}
          <a
            href={'https://gcc.gnu.org/'}
            target={'_blank'}
          >
            {'C compiler'}
          </a>
        </li>
      )}
      {!noCurl && (
        <li>
          <CurlIcon />
          {'  '}
          <a
            href={'https://curl.se/'}
            target={'_blank'}
          >
            {'curl'}
          </a>
        </li>
      )}
      {!noFfmpeg && (
        <li>
          <FfmpegIcon />
          {'  '}
          <a
            href={'https://www.ffmpeg.org/'}
            target={'_blank'}
          >
            {'ffmpeg'}
          </a>
        </li>
      )}
      {hdfTools && (
        <li>
          <StorageIcon />
          {'  '}
          <a
            href={'https://support.hdfgroup.org/tools/'}
            target={'_blank'}
          >
            {'HDF5 Tools'}
          </a>
        </li>
      )}
    </ul>
  );
};
