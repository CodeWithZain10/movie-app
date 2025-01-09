import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie } from "../redux/features/favorite/favoriteSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const favoriteMovies = useSelector((state) => state.favorite.favMovies);

  const handleFavoriteMovies = () => {
    dispatch(addFavoriteMovie(movie));  
  };

  const isMovieFavorited = favoriteMovies.some(
    (favMovie) => favMovie.id === movie.id
  );

  return (
    <div className="w-[250px] h-auto mb-3 font-mono bg-slate-400 rounded-lg">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "https://m.media-amazon.com/images/M/MV5BOWU2NjY5NWQtMjdkZi00ODJlLThkZTAtMzFlYmJmMGE2NjZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        }
        className="w-full h-[250px] rounded-t-lg"
        alt={movie.title || movie.name}
      />
      <div className="p-2">
        <h3 className="text-black">{movie.title || movie.name}</h3>
        <h3 className="text-black">
          Release Date: {movie.release_date || movie.first_air_date}
        </h3>
      </div>
      <button
        onClick={handleFavoriteMovies}
        className="text-black bg-blue-200 w-full mt-2 p-2 rounded-b-lg"
      >
        {isMovieFavorited ? "Added to Favorites" : "Add To Favorite"}
      </button>
    </div>
  );
};

export default MovieCard;
