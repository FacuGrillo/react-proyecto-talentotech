import "./Item.css";
import { Count } from "../Count/Count";

export const Item = ({ id, name, price, description, image }) => {
  return (
    <article className="product">
      <h3>{name}</h3>
      <img src={image} alt={name} width="150" height="200" />
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <Count initial={0} stock={10} onAdd={(count) => console.log(count)} />
    </article>
  );
};
