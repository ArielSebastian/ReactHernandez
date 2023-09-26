import React, { useState } from "react";
import { Navbar, Nav, Dropdown, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ cartItems, vaciarCarrito }) => {
    const [cartVisible, setCartVisible] = useState(false);
    const navigate = useNavigate();

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <div className="app-container">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand as={NavLink} to="/">
                    Tu Ropita
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/catalogo" className="nav-item">
                            Catálogo
                        </Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleCategoryClick("Mujer")}>
                                Mujer
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick("Hombre")}>
                                Hombre
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/contacto" className="nav-item">
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex">
                    <Dropdown alignRight show={cartVisible} onToggle={toggleCartVisibility}>
                        <Dropdown.Toggle variant="link" id="cart-dropdown">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="cart-dropdown">
                            {Object.keys(cartItems).length === 0 ? (
                                <Dropdown.Item>El carrito está vacío</Dropdown.Item>
                            ) : (
                                <>
                                    {Object.keys(cartItems).map((producto, index) => (
                                        <Dropdown.Item key={index}>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={cartItems[producto].imagenUrl}
                                                    alt={producto}
                                                    className="cart-product-image"
                                                />
                                                <div className="cart-product-info">
                                                    <p className="cart-product-name">{producto}</p>
                                                    <p className="cart-product-quantity">
                                                        Cantidad: {cartItems[producto].cantidad}
                                                    </p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={vaciarCarrito}>
                                        Vaciar Carrito
                                    </Dropdown.Item>
                                </>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;