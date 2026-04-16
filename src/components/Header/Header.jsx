import logo from '../../assets/react.svg';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo react" />
      <Nav />
    </header>
  );
};
