import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-container">
      <Item {...item} showDescription={true} wrapperClass="product-detail">
        <button>Agregar al carrito</button>
      </Item>
    </div>
  );
};
