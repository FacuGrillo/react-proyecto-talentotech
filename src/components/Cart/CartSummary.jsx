import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const {cart, getTotalProductsInCart, getTotalToPay, clearCart, checkout} = useCart();

  return (
    <div className="cart-summary">
      <p>Total de productos: {getTotalProductsInCart()}</p>
      <p>Total a pagar: ${getTotalToPay()}</p>

      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={checkout}>Finalizar compra</button>
    </div>
  );
};
