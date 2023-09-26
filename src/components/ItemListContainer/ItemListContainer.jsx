import React from "react";
import "./ItemListContainer.css";
import remera1 from "./images/remera1.jpg";
import remera2 from "./images/remera2.jpg";
import remera3 from "./images/remera3.jpg";

const ItemListContainer = ({ agregarAlCarrito }) => {
    const productos = [
        { id: 1, nombre: "Remera 1", imagen: remera1 },
        { id: 2, nombre: "Remera 2", imagen: remera2 },
        { id: 3, nombre: "Remera 3", imagen: remera3 },
    ];

    const handleAgregarAlCarrito = (producto) => {
        agregarAlCarrito(producto);
    };

    return (
        <div className="item-list-container">
            {productos.map((producto) => (
                <div key={producto.id} className="product">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <p>{producto.nombre}</p>
                    <button onClick={() => handleAgregarAlCarrito(producto)}>
                        Agregar al Carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemListContainer;