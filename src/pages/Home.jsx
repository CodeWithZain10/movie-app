import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovies,
  setLoading,
  selectLoading,
} from "../redux/features/movie/moviesSlice";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        dispatch(setLoading(true));
        const res = await fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=de032fa902f0181c35ca9f3442a84119"
        );
        const data = await res.json();
        dispatch(setMovies(data.results));
        dispatch(setLoading(false));
      } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <MovieList />
    </>
  );
};

export default Home;
