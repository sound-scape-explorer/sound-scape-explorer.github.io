import styles from './styles.module.css';

interface Props {
  size: string;
}

export const SizeInfo = ({size}: Props) => {
  return <span className={styles.size}>{size}</span>;
};
