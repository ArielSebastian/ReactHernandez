import React, { useState } from "react";
import { Navbar, Nav, Badge, Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ cartItems }) => {
    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
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
                        <Nav.Link as={NavLink} to="/contacto" className="nav-item">
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex">
                    <Button variant="link" onClick={toggleCartVisibility}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <Badge pill variant="danger">
                            {Object.keys(cartItems).length}
                        </Badge>
                    </Button>
                    {cartVisible && (
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="cart-dropdown">
                                Ver Carrito
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {Object.keys(cartItems).map((producto, index) => (
                                    <Dropdown.Item key={index}>
                                        Producto: {producto} - Cantidad: {cartItems[producto]}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;
