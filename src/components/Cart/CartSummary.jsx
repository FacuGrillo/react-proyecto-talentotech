import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const CartSummary = () => {
  const { cart, getTotalProductsInCart, getTotalToPay, clearCart, checkout } =
    useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-summary">
      <p>Total de productos: {getTotalProductsInCart()}</p>
      <p>Total a pagar: ${getTotalToPay()}</p>

      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={() => navigate("/")}>Seguir comprando</button>
      <button onClick={checkout}>Finalizar compra</button>
    </div>
  );
};
