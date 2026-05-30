import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }
  if (error) {
    return <p>Error al cargar los productos.</p>;
  }

  return (
    <section>
      <h1>Juegos de PlayStation</h1>
      <p>Los mejores juegos para tu PS4 y PS5</p>
      <div className="list-container">
        <ItemList items={products} />
      </div>
    </section>
  );
};
