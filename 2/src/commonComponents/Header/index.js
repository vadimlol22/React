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
    </div>
  );
};

export default Header;
