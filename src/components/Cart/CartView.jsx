import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

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
        <div className="cart-empty">
          <h2 className="empty-cart-title">Tu carrito está vacío 😢</h2>
          <button onClick={() => (window.location.href = "/")}>Volver a la tienda</button>
        </div>
      )}
    </section>
  );
};
