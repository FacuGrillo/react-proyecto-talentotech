import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalProdutsInCart } = useCart();

  const totalProducts = getTotalProdutsInCart();
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/cart"}>
          Carrito
          {totalProducts > 0 && <span className="cart-count">: {totalProducts}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
