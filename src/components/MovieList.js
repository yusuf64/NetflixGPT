import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="main-movielist-wrapper py-10">
      <h1 className="py-6 text-center font-bold text-6xl text-red-600">
        {title}
      </h1>
      <div className="card-wrapper  w-100 overflow-x-scroll flex">
        {movies.map((movie) => (
          <div className="basis-1/6 flex-none">
            <MovieCard
              key={movie.id}
              posterpath={movie.poster_path}
              alttext={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
