import {Fragment, useEffect, useState} from 'react';

import styles from './styles.module.css';

// reference
// https://github.com/plotly/plotly.js/blob/master/src/fonts/ploticon.js

interface Props {
  name: string;
}

interface PlotlyIcon {
  width: number;
  height: number;
  path: string;
  transform: string;
}

const Icon = ({name}: Props) => {
  const [icon, setIcon] = useState<null | PlotlyIcon>(null);

  useEffect(() => {
    (async () => {
      const Plotly = await import('plotly.js-dist');
      setIcon(Plotly.Icons[name]);
    })();
  }, [name]);

  return (
    <Fragment>
      {icon !== null && (
        <svg
          viewBox={`0 0 ${icon.width} ${icon.height}`}
          className={styles.icon}
        >
          <path
            d={icon.path}
            transform={icon.transform}
            className={styles.path}
          />
        </svg>
      )}
    </Fragment>
  );
};

export const ZoomIcon = () => <Icon name={'zoombox'} />;
export const PanIcon = () => <Icon name={'pan'} />;
export const OrbitalIcon = () => <Icon name={'3d_rotate'} />;
export const TurntableIcon = () => <Icon name={'z-axis'} />;
export const ResetCameraIcon = () => <Icon name={'home'} />;
export const DownloadPngIcon = () => <Icon name={'camera'} />;
export const DownloadSvgIcon = () => <Icon name={'camera-retro'} />;
export const ExportCsvIcon = () => <Icon name={'disk'} />;
