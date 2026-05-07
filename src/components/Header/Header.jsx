import logo from "../../assets/ps-logo.png";
import { Nav } from "../Nav/Nav";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
        <Link to={"/"}>
          <img src={logo} className="logo" alt="PlayStation Logo" />
        </Link>
      <Nav />
    </header>
  );
};
