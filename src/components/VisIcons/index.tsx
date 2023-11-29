import {IonIcon} from '@ionic/react';
import {
  analyticsOutline,
  barChartOutline,
  calendarOutline,
  cloudUploadOutline,
  cogOutline,
  colorPaletteOutline,
  eyeOutline,
  gridOutline,
  headsetOutline,
  helpOutline,
  layersOutline,
  listOutline,
  timerOutline,
} from 'ionicons/icons';

import styles from './styles.module.css';

interface Props {
  icon?: string;
}

const VisIcon = ({icon = cloudUploadOutline}: Props) => {
  return (
    <IonIcon
      className={styles.icon}
      icon={icon}
    />
  );
};

export const ImportIcon = () => <VisIcon icon={cloudUploadOutline} />;
export const SettingsIcon = () => <VisIcon icon={cogOutline} />;
export const HelpIcon = () => <VisIcon icon={helpOutline} />;
export const SelectionIcon = () => <VisIcon icon={eyeOutline} />;
export const ColorsIcon = () => <VisIcon icon={colorPaletteOutline} />;
export const LabelsIcon = () => <VisIcon icon={layersOutline} />;
export const TimeIcon = () => <VisIcon icon={calendarOutline} />;
export const DetailsIcon = () => <VisIcon icon={listOutline} />;
export const AudioIcon = () => <VisIcon icon={headsetOutline} />;
export const TrajectoriesIcon = () => <VisIcon icon={analyticsOutline} />;
export const RelativeTrajectoriesIcon = () => <VisIcon icon={timerOutline} />;
export const IndicatorsIcon = () => <VisIcon icon={barChartOutline} />;
export const DigestedIcon = () => <VisIcon icon={gridOutline} />;
