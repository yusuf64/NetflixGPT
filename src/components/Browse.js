import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPlayingMovies();
  }, []);

  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    dispatch(addNowPlaying(json));
  };

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
