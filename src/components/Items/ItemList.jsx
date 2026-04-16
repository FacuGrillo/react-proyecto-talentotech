import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="productos-container">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
};
