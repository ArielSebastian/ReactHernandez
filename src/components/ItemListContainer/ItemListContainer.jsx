import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import remera1 from "./images/remera1.jpg";
import remera2 from "./images/remera2.jpg";
import remera3 from "./images/remera3.jpg";
import ProductDetail from "../DetalleProducto/ProductDetail";
import { Link, useNavigate, useParams } from "react-router-dom";

const ItemListContainer = ({ agregarAlCarrito }) => {
    const { categoryid } = useParams();
    const [productos, setProductos] = useState([]);
    const [showDetalle, setShowDetalle] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const productosOriginales = [
            {
                id: 1,
                nombre: "Remera 1",
                imagen: remera1,
                detalles: "Detalle remera 1",
                categoria: "Mujer",
            },
            {
                id: 2,
                nombre: "Remera 2",
                imagen: remera2,
                detalles: "Detalle remera 2",
                categoria: "Mujer",
            },
            {
                id: 3,
                nombre: "Remera 3",
                imagen: remera3,
                detalles: "Detalle remera 3",
                categoria: "Hombre",
            },
        ];

        if (categoryid === "Mujer") {
            setProductos(productosOriginales.filter((producto) => producto.categoria === "Mujer"));
        } else if (categoryid === "Hombre") {
            setProductos(productosOriginales.filter((producto) => producto.categoria === "Hombre"));
        } else {
            setProductos(productosOriginales);
        }
    }, [categoryid]);

    const handleMostrarDetalles = (producto) => {
        setSelectedProduct(producto);
        setShowDetalle(true);
    };

    const handleCloseDetalle = () => {
        setShowDetalle(false);
    };

    return (
        <div className="item-list-container">
            {productos.map((producto) => (
                <div key={producto.id} className="product">
                    <img src={producto.imagen} alt={producto.nombre} className="product-image" />
                    <p>{producto.nombre}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <button onClick={() => handleMostrarDetalles(producto)}>Detalle</button>
                </div>
            ))}
            {showDetalle && (
                <ProductDetail
                    producto={selectedProduct}
                    onClose={handleCloseDetalle}
                    onAddToCart={agregarAlCarrito} // Asegúrate de que esta función se pase correctamente
                />
            )}

        </div>
    );
};

export default ItemListContainer;