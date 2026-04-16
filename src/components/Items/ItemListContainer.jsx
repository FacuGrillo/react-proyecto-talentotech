import "./ItemListContainer.css";
import { ItemList } from "./ItemList";
import { useState } from "react";

export const ItemListContainer = ({ title }) => {
  const arrayProducts = [
    {
      id: 0,
      name: "Producto 1",
      price: 10.99,
      description: "Descripción del producto 1",
    },
    {
      id: 1,
      name: "Producto 2",
      price: 19.99,
      description: "Descripción del producto 2",
    },
    {
      id: 2,
      name: "Producto 3",
      price: 5.49,
      description: "Descripción del producto 3",
    },
  ];

  const [products, setProducts] = useState([]);

  //  useEffect(() => {
  //      fetch('https://api.example.com/products')
  //          .then(response => response.json())
  //          .then(data => setProducts(data))
  //          .catch(error => console.error('Error fetching products:', error));
  //    }, []);

  const getProducts = () => {
    setProducts(arrayProducts);
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <section>
      <h1>Componente ItemListContainer</h1>
      <p>Este componente a futuro tendra logica y conexion a una API</p>
      <button className="btn-load" onClick={getProducts}>
        Cargar Productos
      </button>
      <button className="btn-clear" onClick={clearProducts}>
        Limpiar Productos
      </button>
      <ItemList items={products} />
    </section>
  );
};
