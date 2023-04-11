import { ROUTE_NAMES } from "../../../routes/routeNames";

export const NAVIGATION_ITEMS = {
  public: [
    {
      title: "Sign In",
      path: ROUTE_NAMES.SIGN_IN,
    },
    {
      title: "Sign Up",
      path: ROUTE_NAMES.SIGN_UP,
    },
    {
      title: "Home",
      path: ROUTE_NAMES.HOME,
    },
  ],
  private: [
    {
      title: "Counter",
      path: ROUTE_NAMES.COUNTER,
    },
    {
      title: "Counters",
      path: ROUTE_NAMES.COUNTERS,
    },
    {
      title: "Pokemons",
      path: ROUTE_NAMES.POKEMONS,
    },
    {
      title: "TODO",
      path: ROUTE_NAMES.TODO,
    },
  ],
};

export const publicNavsKeys = "public";
export const privateNavsKeys = "private";
