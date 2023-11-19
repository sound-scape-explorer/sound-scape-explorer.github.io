import styles from './styles.module.css';

interface Props {
  children: string;
  background: string;
}

export const ExcelTab = ({children, background}: Props) => (
  <code
    className={styles.tab}
    style={{background: background}}
  >
    {children}
  </code>
);
