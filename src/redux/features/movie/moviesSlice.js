import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: true,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setMovies, setLoading } = movieSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectLoading = (state) => state.movies.loading;

export default movieSlice.reducer;
