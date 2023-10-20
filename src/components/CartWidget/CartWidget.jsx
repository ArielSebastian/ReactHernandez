import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
    const { cartItems } = useCart(); 
    const itemCount = Object.values(cartItems).reduce(
        (total, product) => total + product.quantity,
        0
    );

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;