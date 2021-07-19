import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "../styles/header.css";

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ value, setValue }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>ChromeMovies</h1>
      </div>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div className="header-input">
        <Input
          width="260px"
          placeholder="Find your favorite movie by title"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
