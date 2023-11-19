import styles from './styles.module.css';

interface Props {
  name: string;
  big?: boolean;
}

export const VisMenuIcon = ({name, big = false}: Props) => {
  return (
    <img
      src={`/img/visualisation/menu/${name}.png`}
      alt={name}
      title={name[0].toUpperCase() + name.slice(1)}
      className={big ? styles.big : styles.default}
    />
  );
};
