import { replace, useNavigate, useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="success-container">
      <div className="success-icon">✓</div>
      <h2>Producto creado exitosamente</h2>
      <p>El producto con ID {id} ha sido creado correctamente.</p>
      <p>Puede crear otro producto haciendo clic en el botón.</p>
      <button onClick={() => navigate("/admin", { replace: true })}>
        Crear otro producto
      </button>
    </section>
  );
};
