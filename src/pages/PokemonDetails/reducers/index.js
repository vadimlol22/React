import { createSlice } from "@reduxjs/toolkit";
import { getPokemonDetailsThunk } from "../api";

const initialState = {
  isLoading: false,
  errors: null,
  name: "",
  stats: [],
  sprites: [],
};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetailsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.name = payload.name;
      state.stats = payload.stats;
      state.sprites = payload.sprites;
    });
    builder.addCase(getPokemonDetailsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.errors = error;
    });
  },
});

export default pokemonDetailsSlice.reducer;
