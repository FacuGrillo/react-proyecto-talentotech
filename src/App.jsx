import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/success/:id" element={<ProductSuccess />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
