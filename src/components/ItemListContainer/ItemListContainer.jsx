import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section>
      <h1>Juegos PS5</h1>
      <p>Los mejores juegos para tu PlayStation 5</p>
      <div className="list-container">
        <ItemList items={products} />
      </div>
    </section>
  );
};
