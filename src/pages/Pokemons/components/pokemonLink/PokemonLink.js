import styles from "./styles.module.scss";

const PokemonLink = ({ name }) => {
  return <div className={styles.button}>{name}</div>;
};

export default PokemonLink;
