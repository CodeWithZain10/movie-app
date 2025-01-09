import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteMovie } from "../redux/features/favorite/favoriteSlice";

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.favorite.favMovies);

  const handleRemoveFavorite = (movie) => {
    dispatch(removeFavoriteMovie(movie));
  };

  return (
    <>
      <div className="flex justify-start mx-4 gap-4 mt-4 flex-wrap">
        {favMovies.length === 0 ? (
          <h2>No favorite movies yet!</h2>
        ) : (
          favMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-[250px] h-auto mb-3 font-mono bg-slate-400 rounded-lg"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "https://via.placeholder.com/250"
                }
                alt={movie.title || movie.name}
                className="w-full h-[230px] rounded-t-lg"
              />
              <div className="p-2">
                <h3 className="text-black">{movie.title || movie.name}</h3>
                <h3 className="text-black">
                  Release Date: {movie.release_date || movie.first_air_date}
                </h3>
              </div>
              <button
                onClick={() => handleRemoveFavorite(movie)}
                className="text-white bg-red-500 text-xl w-full mt-2 p-2 rounded-b-lg"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FavoriteMovies;
