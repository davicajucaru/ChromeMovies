import { Input } from "@chakra-ui/react";

import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>ChromeMovies</h1>
      </div>
      <div className="header-links">
        <a href="/">Home</a>
        <a href="/">Favorites</a>
      </div>
      <div className="header-input">
        <Input placeholder="Find your favorite movie by title" />
      </div>
    </div>
  );
};

export default Header;
