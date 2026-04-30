import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Count } from "./components/Count/Count";

function App() {
  return (
    <>
      <Header />
      <main>
        <ItemListContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
