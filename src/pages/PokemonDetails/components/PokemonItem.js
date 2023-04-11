import { useSelector } from "react-redux";

import {
  pokemonNameSelector,
  pokemonSpritesSelector,
  pokemonStatsSelector,
} from "../selectors";

import styles from "./styles.module.scss";

import defense from "./../../../static/images/defense.png";
import hp from "./../../../static/images/hp.png";
import speed from "./../../../static/images/speed.png";
import sword from "./../../../static/images/sword.png";

const PokemonItem = () => {
  const name = useSelector(pokemonNameSelector);
  const sprites = useSelector(pokemonSpritesSelector);
  const stats = useSelector(pokemonStatsSelector);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__name}>{name.toUpperCase()}</h1>
      <img
        className={styles.wrapper__img}
        src={sprites.front_default}
        alt={name}
      />
      <div className={styles.wrapper__stats}>
        <div className={styles.wrapper__stats__stat}>
          <img src={sword} alt="heart" />
          <p>Attack: {stats[1]?.base_stat}</p>
        </div>
        <div className={styles.wrapper__stats__stat}>
          <img src={hp} alt="heart" />
          <p>HP: {stats[0]?.base_stat}</p>
        </div>
        <div className={styles.wrapper__stats__stat}>
          <img src={defense} alt="heart" />
          <p>Defense: {stats[2]?.base_stat}</p>
        </div>
        <div className={styles.wrapper__stats__stat}>
          <img src={speed} alt="heart" />
          <p>Speed: {stats[5]?.base_stat}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
