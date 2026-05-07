import "./ItemList.css";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  if (!items.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="products-container">
      {items.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <Item {...item} showDescription={false} wrapperClass="product-list" />
        </Link>
      ))}
    </div>
  );
};
