import { Route, Routes } from "react-router-dom";

import CounterContainer from "../pages/Counter/containers/CounterContainer";
import PageContainer from "../pages/page/containers/PageContainer";
import TodoContainer from "../pages/TodoList/containers/TodoContainer";
import PokemonsContainer from "../pages/Pokemons/containers/PokemonsContainer";
import PokemonDetailsContainer from "../pages/PokemonDetails/containers/PokemonDetailsContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>This is home page!!!</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS} element={<PageContainer />} />
      <Route path={ROUTE_NAMES.TODO} element={<TodoContainer />} />
      <Route path={ROUTE_NAMES.POKEMONS} element={<PokemonsContainer />} />
      <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={<PokemonDetailsContainer />}
      />
    </Routes>
  );
};

export default Router;
