import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  // console.log(movies);

  if (!movies.nowPlaying) return;

  return (
    <div
      className="main-secondary-card
    "
    >
      <MovieList title={"Now Playing"} movies={movies.nowPlaying.results} />

      {movies.trending && (
        <MovieList title={"Trending"} movies={movies.trending.results} />
      )}
    </div>
  );
};

export default SecondaryContainer;
