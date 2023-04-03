import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

import "bootstrap/dist/css/bootstrap.css";

import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div
      className="bg-dark text-light d-flex flex-column"
      style={{ height: "100vh" }}
    >
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <div className="bg-dark">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />

              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />

              <Route path="/cart" element={<Cart />} />

              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

              <Route path="/form/form" element={<Form />} />

              <Route path="*" element={<h1>error 404</h1>} />
            </Routes>
          </div>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
