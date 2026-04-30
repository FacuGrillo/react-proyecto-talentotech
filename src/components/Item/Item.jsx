import "./Item.css";

export const Item = ({ id, name, price, image }) => {
  return (
    <article className="product">
      <h3>{name}</h3>
      <img src={image} alt={name} width="150" height="200" />
      <p className="price">${price.toFixed(2)}</p>
    </article>
  );
};
