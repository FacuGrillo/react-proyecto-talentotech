import { useState } from "react";
import "./Count.css";

export const Count = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addToCart = () => {
    onAdd(count);
  };
  return (
    <div className="counter">
      <button className="btn-decrement" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button className="btn-increment" onClick={increment}>
        +
      </button>
      <button
        className="add-to-cart"
        onClick={addToCart}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
