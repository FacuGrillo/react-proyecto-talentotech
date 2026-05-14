import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="detail-container">
      <div className="product-detail">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="price">${item.price}</span>
        <div className="item-actions">
          <button onClick={() => addToCart(item)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
