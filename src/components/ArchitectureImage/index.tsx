import styles from './styles.module.css';

export const ArchitectureImage = () => (
  <div className={styles.container}>
    <img
      alt={'architecture'}
      src="/img/architecture.svg"
      className={styles.image}
      role="img"
    />
  </div>
);
