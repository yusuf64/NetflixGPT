import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  console.log(movies);

  if (!movies.nowPlaying) return;

  return (
    <div className="w-screen">
      <MovieList title={"Now Playing"} movies={movies.nowPlaying.results} />
    </div>
  );
};

export default SecondaryContainer;
