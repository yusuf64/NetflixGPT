import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlaying, addTrendingMovies } from "../utils/movieSlice";

const useFetchMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPlayingMovies();
    getTrendingMovie();
  }, []);

  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    dispatch(addNowPlaying(json));
  };

  const getTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    console.log(json);

    dispatch(addTrendingMovies(json));
  };
};

export default useFetchMovie;
