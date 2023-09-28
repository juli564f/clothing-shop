import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import shoppingCart from "./img_171562-3516626141.png"


/* "name" er navnet på offcanvas knappen, her referere den til "end" set i return */ 

export default function Sidebar({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show);

/* Button variant="outline-dark" er en styling der gør linjerne sorte. onclick er at man kan klikke på den. "me-2 er størrelsen",
 {shoppingcart} er ikonet for offcanvas.  */ 
 /* først har vi Button som er Offcanvas-knappen, Koden under er Offcanvas som er det der bliver vist når knappen er trykket på  */ 
  return (
    <>

      <div className="button1"> 
      <Button variant="outline-dark" onClick={handleShow} className="me-2">
        <img  src={shoppingCart} alt="shoppingcartlogo" style={{ width: '20px' }} />
      </Button>
      </div>



      <Offcanvas show={show} onHide={handleClose} placement="end" >
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

/* Her er koden for hvor den skal dukke op, vi har sat den til end, som betyder den burde poppe op i højre*/ 
/*function Example() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
*/
