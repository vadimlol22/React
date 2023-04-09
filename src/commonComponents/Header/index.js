import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={ROUTE_NAMES.HOME} className={styles.link}>
        Home
      </Link>
      <Link to={ROUTE_NAMES.COUNTER} className={styles.link}>
        Counter
      </Link>
      <Link to={ROUTE_NAMES.COUNTERS} className={styles.link}>
        Counters
      </Link>
      <Link to={ROUTE_NAMES.TODO} className={styles.link}>
        TODO-List
      </Link>
      <Link to={ROUTE_NAMES.POKEMONS} className={styles.link}>
        Pokemons
      </Link>
      <Link to={ROUTE_NAMES.SIGN_UP} className={styles.link}>
        Sign-Up
      </Link>
      <Link to={ROUTE_NAMES.SIGN_IN} className={styles.link}>
        Sign-In
      </Link>
    </div>
  );
};

export default Header;
