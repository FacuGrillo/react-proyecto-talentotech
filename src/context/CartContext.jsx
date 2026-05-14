import { Navigate, useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const cartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }

  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVIDER                                  */
/* -------------------------------------------------------------------------- */

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  /* ----------------- Evalua existencia: retorna un booleano ----------------- */
  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  /* --------------------------- Agregar al carrito --------------------------- */

  const addToCart = (item) => {
    if (isInCart(item)) {
      alert("El producto ya se encuentra en el carrito");
      return;
    }
    setCart([...cart, item]);
    alert("Producto agregado al carrito 🛒");
  };
  /* -------------------------- Eliminar del carrito -------------------------- */

  const removeFromCart = (id) => {
    const updatedCArt = cart.filter((element) => element.id !== id);
    setCart(updatedCArt);
    alert("Producto eliminado del carrito 🗑️");
  };

  /* ----------------------------- Vaciar carrito ----------------------------- */
  const clearCart = () => {
    setCart([]);
  };

  /* -------------------- Total de productos en el carrito -------------------- */
  const getTotalProdutsInCart = () => {
    return cart.length;
  };

  /* ------------------------------ Total a pagar ----------------------------- */

  const getTotalToPay = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  /* -------------------------------- Checkout -------------------------------- */

  const checkout = () => {
    alert("Gracias por tu compra! 🛒");
    clearCart();
    Navigate("/");
  };

  const values = {
    addToCart,
    clearCart,
    removeFromCart,
    getTotalProdutsInCart,
    getTotalToPay,
    checkout,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};
