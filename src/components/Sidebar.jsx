import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Sidebar(props) {


    return (
        <div>
            <nav className="nav flex-column">
                <a className="nav-link" href="#">Indkøbskurv</a>
                <a className="nav-link" href="#">Produkter</a>
                <button>Betal</button>
            </nav>
        </div>
    )
}