import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


import shoppingCart from "./img_171562-3516626141.png"

/*export default function Sidebar(props) {
    return (
        <div>
            <nav className="nav flex-column">
                <img  src={shoppingCart} alt="shoppingcartlogo" style={{ width: '20px' }} />

                <a className="nav-link" href="#">Indkøbskurv</a>
                <a className="nav-link" href="#">Produkter</a>
                <button>Betal</button>
            </nav>
        </div>
    )
}*/



function OffCanvasExample({name, ...props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} className="me-2">
      <img  src={shoppingCart} alt="shoppingcartlogo" style={{ width: '20px' }} />
      
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shoppingcart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <a className="nav-link" href="#">Indkøbskurv</a>
                <a className="nav-link" href="#">Produkter</a>
                <button>Betal</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example

function Example() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

