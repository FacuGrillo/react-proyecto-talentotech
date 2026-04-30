import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-container">
      <div className="product-detail">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="price">${item.price}</span>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};