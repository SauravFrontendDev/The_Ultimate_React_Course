import React, { useState } from "react";
import MovieList from "./MovieList";

const MoviesListBox = ({ tempMovieData, movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        // LIST
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesListBox;
