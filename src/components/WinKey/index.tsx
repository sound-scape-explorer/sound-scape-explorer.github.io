import {Command} from 'react-feather';

import styles from './styles.modules.css';

export const WinKey = () => (
  <code>
    <Command
      className={styles.command}
      size={12}
    />{' '}
    Win
  </code>
);
