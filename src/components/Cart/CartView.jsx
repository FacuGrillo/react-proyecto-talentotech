import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";

import "./Cart.css";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1 className="cart-title">Carrito de compras 🛒</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <h2 className="empty-cart-title">Tu carrito está vacío 😢</h2>
      )}
      <Link to={"/"}>Seguir comprando</Link>
    </section>
  );
};
