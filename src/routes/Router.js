import { Route, Routes } from "react-router-dom";

import CounterContainer from "../pages/Counter/containers/CounterContainer";
import PageContainer from "../pages/page/containers/PageContainer";
import TodoContainer from "../pages/TodoList/containers/TodoContainer";
import PokemonsContainer from "../pages/Pokemons/containers/PokemonsContainer";
import PokemonDetailsContainer from "../pages/PokemonDetails/containers/PokemonDetailsContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";

import { ROUTE_NAMES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>This is home page!!!</h1>} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTER}
        element={
          <PrivateRoute>
            <CounterContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.COUNTERS}
        element={
          <PrivateRoute>
            <PageContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.TODO}
        element={
          <PrivateRoute>
            <TodoContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.POKEMONS}
        element={
          <PrivateRoute>
            <PokemonsContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={
          <PrivateRoute>
            <PokemonDetailsContainer />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
