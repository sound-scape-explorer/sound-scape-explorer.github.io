import {Icon} from '@iconify/react';

import styles from './styles.module.css';

interface Props {
  icon: string;
  color?: string;
}

export const SimpleIcon = ({icon, color}: Props) => (
  <Icon
    className={styles.icon}
    icon={`simple-icons:${icon}`}
    style={{color: color}}
  />
);

export const ExcelIcon = () => (
  <SimpleIcon
    icon="microsoftexcel"
    color="#217346"
  />
);

export const PythonIcon = () => (
  <SimpleIcon
    icon="python"
    color="#FFD43B"
  />
);

export const StorageIcon = () => (
  <Icon
    className={styles.icon}
    icon="bi:type-h5"
    style={{color: '#28378C'}}
  />
);
