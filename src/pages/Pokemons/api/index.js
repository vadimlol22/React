import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApiConfig } from "../../../config/pokemonApi";

const getPokemonsAll = () => pokemonApiConfig.get("/pokemon");

export const getPokemonsThunk = createAsyncThunk(
  "dataFetching/getPokemons",
  async () => {
    const response = await getPokemonsAll();

    return response.data.results;
  }
);
