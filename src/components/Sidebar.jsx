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
    setCart([...cart, item]); // tilføjelse af objekt (item) til indkøbskurv (cart) 
  };

  return (
    <>
    {/* indkøbskurv ikon */}
      <div className="button1"> 
        <Button variant="outline-dark" onClick={handleShow} className="me-2">
          <img  src={shoppingCart} alt="shoppingcartlogo" style={{ width: '20px' }} />
        </Button>
      </div>
 {/* Ofcanvas gør at den er gemt væk indtil knappen er aktiveret, og popper up i højre side*/}
      <Offcanvas show={show} onHide={handleClose} placement="top-end">
        <Offcanvas.Body style={{ position: 'fixed', top: '60px', right: '0' }}> 
          <Offcanvas.Title>Shoppingcart</Offcanvas.Title>
 {/* indkøbskurven*/}
          <div className="cart">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.title} style={{ width: '50px' }} />
                <span>{item.title}</span>
                <span>{item.price} kr</span>
              </div>
            ))}
          </div>
 {/* Knap*/}
          <button className="payButton" style={{ position: "absolute", right:'30%', left:'50', }}>Pay</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
