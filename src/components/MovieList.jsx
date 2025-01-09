import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../redux/features/movie/moviesSlice";
import { selectSearch } from "../redux/features/search/searchSlice";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const searchQuery = useSelector(selectSearch);

  const filteredMovies = searchQuery
    ? movies.filter((movie) =>
        (movie.title || movie.name)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : movies;

  return (
    <div className="flex justify- justify-start gap-16 px-6 my-4 flex-wrap">
      {filteredMovies.length === 0 ? (
        <h1 className="text-3xl text-white font-semibold">No Movie Found</h1>
      ) : (
        filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;
