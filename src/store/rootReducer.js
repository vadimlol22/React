import { combineReducers } from "redux";

import todosReducer from "./../pages/TodoList/reducers";
import dataFetchingReducer from "./../pages/Pokemons/reducers";
import pokemonDetailsReducer from "./../pages/PokemonDetails/reducers";
import signInReducer from "./../pages/SignIn/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
  todosReducer: todosReducer,
  dataFetching: dataFetchingReducer,
  pokemonDetails: pokemonDetailsReducer,
});
