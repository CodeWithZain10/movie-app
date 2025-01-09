import { createSlice } from "@reduxjs/toolkit";

export const favoriteMoviesSlice = createSlice({
  name: "favorite",
  initialState: {
    favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
  },
  reducers: {
    addFavoriteMovie: (state, action) => {
      const existingMovie = state.favMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!existingMovie) {
        state.favMovies.push(action.payload);
        localStorage.setItem("favMovies", JSON.stringify(state.favMovies));
      }
    },
    removeFavoriteMovie: (state, action) => {
      state.favMovies = state.favMovies.filter(
        (movie) => movie.id !== action.payload.id
      );

      localStorage.setItem("favMovies", JSON.stringify(state.favMovies));
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
