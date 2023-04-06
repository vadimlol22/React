import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./../pages/TodoList/reducers";
import dataFetchingReducer from "./../pages/Pokemons/reducers";
import pokemonDetailsReducer from "./../pages/PokemonDetails/reducers";

export const store = configureStore({
  reducer: {
    todosReducer: todosReducer,
    dataFetching: dataFetchingReducer,
    pokemonDetails: pokemonDetailsReducer,
  },
});
