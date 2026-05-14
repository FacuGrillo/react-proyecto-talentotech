import "./Item.css";

export const Item = ({ id, name, price, image, children }) => {
  return (
    <article className="product">
      <h3>{name}</h3>
      <img src={image} alt={name} width="150" height="200" />
      <p className="price">${price.toFixed(2)}</p>
      {children && <div className="item-actions">{children}</div>}
    </article>
  );
};
