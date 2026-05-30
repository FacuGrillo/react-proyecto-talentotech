import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
    .then((data) => setItemDetail(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Disponible para PS4 y PS5</h1>
      <div className="detail-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
