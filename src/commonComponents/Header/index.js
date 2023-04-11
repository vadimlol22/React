import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";
// import {
//   NAVIGATION_ITEMS,
//   privateNavsKeys,
//   publicNavsKeys,
// } from "./config/index";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import isAuthenticatedSelector from "./../../pages/SignIn/selectors";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  // const navsItemsAccessKey = isAuthenticated ? privateNavsKeys : publicNavsKeys;

  return (
    <div className={styles.header}>
      {isAuthenticated ? (
        <div>
          <Link key="COUNTER" to={ROUTE_NAMES.COUNTER} className={styles.link}>
            Counter
          </Link>
          <Link
            key="COUNTERS"
            to={ROUTE_NAMES.COUNTERS}
            className={styles.link}
          >
            Counters
          </Link>
          <Link key="TODO" to={ROUTE_NAMES.TODO} className={styles.link}>
            TODO-List
          </Link>
          <Link
            key="POKEMONS"
            to={ROUTE_NAMES.POKEMONS}
            className={styles.link}
          >
            Pokemons
          </Link>
        </div>
      ) : (
        <div>
          <Link key="HOME" to={ROUTE_NAMES.HOME} className={styles.link}>
            Home
          </Link>
          <Link key="SIGN_UP" to={ROUTE_NAMES.SIGN_UP} className={styles.link}>
            Sign-Up
          </Link>
          <Link key="SIGN_IN" to={ROUTE_NAMES.SIGN_IN} className={styles.link}>
            Sign-In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
