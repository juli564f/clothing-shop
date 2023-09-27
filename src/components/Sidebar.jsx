import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import shoppingCart from "./img_171562-3516626141.png"

export default function Sidebar(props) {
    return (
        <div>
            <nav className="nav flex-column">
                <img className="shoppingcart" src={shoppingCart} alt="shoppingcartlogo" />

                <a className="nav-link" href="#">Indkøbskurv</a>
                <a className="nav-link" href="#">Produkter</a>
                <button>Betal</button>
            </nav>
        </div>
    )
}