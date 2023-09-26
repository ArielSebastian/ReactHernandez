import React, { useState } from "react";

const ProductDetail = ({ producto, onClose, onAddToCart }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleAddToCart = () => {
        onAddToCart(producto, cantidad);
        onClose();
    };

    return (
        <div className="product-detail">
            <h2>{producto.nombre}</h2>
            <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{ maxWidth: "55%", height: "auto" }}
            />
            <p>{producto.detalles}</p>
            <div className="quantity">
                <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => setCantidad(cantidad + 1)}>+</button>
            </div>
            <div className="product-info">
                <div className="product-info-item">
                    <strong>Tamaño:</strong> {producto.tamano}
                </div>
                <div className="product-info-item">
                    <strong>Cantidad a agregar al carrito:</strong> {cantidad}
                </div>
            </div>
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default ProductDetail;