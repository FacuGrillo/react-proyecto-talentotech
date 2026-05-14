import { useCart } from "../../context/CartContext";
import "./Cart.css";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    getTotalProductsInCart,
    getTotalToPay,
    checkout,
  } = useCart();

  if (cart.length === 0) {
    return <h2 className="empty-cart-title">Tu carrito está vacío 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de compras</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
            <div className="item-actions">
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p>Total de productos: {getTotalProductsInCart()}</p>
        <p>Total a pagar: ${getTotalToPay()}</p>

        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={checkout}>Finalizar compra</button>
      </div>
    </div>
  );
};
