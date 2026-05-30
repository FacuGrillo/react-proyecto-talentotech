import React from "react";
import { useCart } from "../../context/CartContext";

export const CartItem = ({ item }) => {
  const { cart, removeFromCart } = useCart();

  return (
    <li key={item.id}>
      <img src={item.image} alt={item.name} />
      <span>{item.name}</span>
      <span className="price">${item.price}</span>
      <div className="item-actions">
        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    </li>
  );
};
