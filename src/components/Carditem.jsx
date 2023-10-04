import React from 'react'
//Card importeret. 
import Card from 'react-bootstrap/Card';
//Button importeret
import Button from 'react-bootstrap/Button';

import { useState } from 'react';


//Dette er vores skabelon til vores kort som indeholder tøjet.
export default function Carditem({item, removeFromList, addToCart}) {

  const [isCardVisible, setIsCardVisible] = useState(true);

  function handleAddToCart(){
    addToCart(item);
    removeFromList(item);
    setIsCardVisible(false); // Hide the card after adding to cart
  };

  return (
    isCardVisible && <Card style={{ width: '18rem',  margin:'20px'}}>

        <Card.Img variant="top" src={item.img} alt="Hoodie" />
        <Card.Body>
            <Card.Title> <span>{item.title}</span></Card.Title>
            <Card.Text>
                <p>{item.text}</p>
                <p><span>Størrelse:</span> {item.size} </p>
                <p><span> Pris: </span>{item.price}</p>

            </Card.Text>
            
            <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
        </Card.Body>
  </Card>
  )
  
}
