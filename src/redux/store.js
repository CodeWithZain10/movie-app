import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movie/moviesSlice";
import searchSlice from "./features/search/searchSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    search: searchSlice,
    favorite: favoriteSlice,
  },
});
