import logo from '../../assets/ps-logo.png';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="PlayStation Logo" />
      <Nav />
    </header>
  );
};
