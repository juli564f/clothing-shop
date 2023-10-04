import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import shoppingCart from "./img_171562-3516626141.png";

import "../components/carousel.css"

export default function Sidebar({cart, setCart}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const cartDummyData = [];

  const addToCart = (item) => {
    setCart([...cart, item]); // Add the item to the cart
  };

  /* ... (other code) */

  return (
    <>
      <div className="button1"> 
        <Button variant="outline-dark" onClick={handleShow} className="me-2">
          <img  src={shoppingCart} alt="shoppingcartlogo" style={{ width: '20px' }} />
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="top-end">
        <Offcanvas.Body style={{ position: 'fixed', top: '60px', right: '0' }}> 
          <Offcanvas.Title>Shoppingcart</Offcanvas.Title>

          <div className="cart">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.title} style={{ width: '50px' }} />
                <span>{item.title}</span>
                <span>{item.price} kr</span>
              </div>
            ))}
          </div>

          <button className="payButton" style={{ position: "absolute", right:'30%', left:'50', }}>Pay</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
