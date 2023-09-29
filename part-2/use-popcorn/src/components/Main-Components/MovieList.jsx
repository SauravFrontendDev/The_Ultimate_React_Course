import React from "react";
import MovieShow from "./MovieShow";

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieShow movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
