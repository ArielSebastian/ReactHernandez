import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  const [productosEnCarrito, setProductosEnCarrito] = useState({});

  const agregarAlCarrito = (producto) => {
    setProductosEnCarrito((prevProductosEnCarrito) => ({
      ...prevProductosEnCarrito,
      [producto.nombre]: (prevProductosEnCarrito[producto.nombre] || 0) + 1,
    }));
  };

  return (
    <div className="app-container">
      <Router>
        <NavBar cartItems={productosEnCarrito} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/catalogo"
              element={<ItemListContainer agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;