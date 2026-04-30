import "./Item.css";

export const Item = ({ id, name, price, description, image, children }) => {
  return (
    <div>
      <article className="product">
        <h3>{name}</h3>
        <img src={image} alt={name} width="150" height="200" />
        <p>{description}</p>
        <p className="price">${price.toFixed(2)}</p>
      </article>
      {children}
    </div>
  );
};
