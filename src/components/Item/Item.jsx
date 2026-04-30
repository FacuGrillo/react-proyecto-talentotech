import "./Item.css";

export const Item = ({ id, name, price, image, description, showDescription = true, wrapperClass = "", children }) => {
  return (
      <article className={`product ${wrapperClass}`}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        {showDescription && <p>{description}</p>}
        <p className="price">${price.toFixed(2)}</p>
      {children}
      </article>
  );
};
