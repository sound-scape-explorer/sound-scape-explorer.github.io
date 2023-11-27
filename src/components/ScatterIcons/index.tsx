import Plotly from 'plotly.js-dist';

import styles from './styles.module.css';

// reference
// https://github.com/plotly/plotly.js/blob/master/src/fonts/ploticon.js

interface Props {
  name: string;
}

const Icon = ({name}: Props) => {
  const icon = Plotly.Icons[name];
  const width = icon.width;
  const height = icon.height;
  const path = icon.path;
  const transform = icon.transform;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={styles.icon}
    >
      <path
        d={path}
        transform={transform}
        className={styles.path}
      />
    </svg>
  );
};

export const ZoomIcon = () => <Icon name={'zoombox'} />;
export const PanIcon = () => <Icon name={'pan'} />;
export const OrbitalIcon = () => <Icon name={'3d_rotate'} />;
export const TurntableIcon = () => <Icon name={'z-axis'} />;
export const ResetCameraIcon = () => <Icon name={'home'} />;
export const LastCameraIcon = () => <Icon name={'movie'} />;
export const DownloadPngIcon = () => <Icon name={'camera'} />;
export const DownloadSvgIcon = () => <Icon name={'camera-retro'} />;
export const ExportCsvIcon = () => <Icon name={'disk'} />;
