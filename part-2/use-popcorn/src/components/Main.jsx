import React, { useState } from "react";
import MoviesListBox from "./Main-Components/MoviesListBox";
import WatchedListBox from "./Main-Components/WatchedListBox";

const Main = ({ movies, tempWatchedData, tempMovieData }) => {
  return (
    <main className="main">
      <MoviesListBox tempMovieData={tempMovieData} movies={movies} />

      <WatchedListBox tempWatchedData={tempWatchedData} movies={movies} />
    </main>
  );
};

export default Main;
