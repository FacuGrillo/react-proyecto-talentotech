import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { useNavigate } from "react-router-dom";

import "./Cart.css";

export const CartView = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <section className="cart-container">
      <h1 className="cart-title">Carrito de compras 🛒</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <div className="cart-empty">
          <h2 className="empty-cart-title">Tu carrito está vacío 😢</h2>
          <button onClick={() => navigate("/")}>Volver a la tienda</button>
        </div>
      )}
    </section>
  );
};
