import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="products-container">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
