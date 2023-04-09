import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  profileData: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
