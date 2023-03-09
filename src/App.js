import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.css";
import Item from "./Components/Item/Item";
import Footer from "./Components/Footer/Footer";
import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} elementos `);
    console.log("se agrego al carrito " + cantidad + " elementos");
  };

  let stock = 5;

  let initial = 1;

  return (
    <div className="bg-dark text-light">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
