import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./../pages/TodoList/reducers";
import dataFetchingReducer from "./../pages/Pokemons/reducers";
import pokemonDetailsReducer from "./../pages/PokemonDetails/reducers";
import signInReducer from "./../pages/SignIn/reducers";

export const store = configureStore({
  reducer: {
    auth: signInReducer,
    todosReducer: todosReducer,
    dataFetching: dataFetchingReducer,
    pokemonDetails: pokemonDetailsReducer,
  },
});
