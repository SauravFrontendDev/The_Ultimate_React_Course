import React from "react";
import Logo from "./NavBar-Components/Logo";
import SearchBar from "./NavBar-Components/SearchBar";
import NumResults from "./NavBar-Components/NumResults";

const NavBar = ({ query, setQuery, movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
