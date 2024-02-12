import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div><MovieCard posterpath={movies[0].poster_path} /></div>
    </div>
  );
};

export default MovieList;
