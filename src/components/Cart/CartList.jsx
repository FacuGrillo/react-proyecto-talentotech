import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const {cart, removeFromCart} = useCart();

  return (
    <ul className="cart-list">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
