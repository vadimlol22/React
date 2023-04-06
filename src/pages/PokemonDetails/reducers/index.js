import { createSlice } from "@reduxjs/toolkit";
import { getPokemonDetailsThunk } from "../api";

const initialState = {
  isLoading: false,
  errors: null,
  data: {},
};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetailsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getPokemonDetailsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.errors = error;
    });
  },
});

export default pokemonDetailsSlice.reducer;
