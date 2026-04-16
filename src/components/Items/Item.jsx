import { Count } from "../Count/Count";
import { FavoriteButton } from "../Fav/FavoriteButton";

export const Item = ({ name, price, description }) => {
  return (
    <article className="producto">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="precio">${price.toFixed(2)}</p>
      <Count initial={0} stock={10} onAdd={(count) => console.log(count)} />
      <FavoriteButton />
    </article>
  );
};
