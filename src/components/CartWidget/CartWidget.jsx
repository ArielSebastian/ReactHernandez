import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
    const itemCount = 3;

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;