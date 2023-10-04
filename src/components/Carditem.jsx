import React from 'react'
//Card importeret. 
import Card from 'react-bootstrap/Card';
//Button importeret
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

//Dette er vores skabelon til vores kort som indeholder tøjet.
// functionen Carditem er kortets objekter, objektet er "item, 
// removeFromList skal fjerne objektet, addToCart skal flytte objektet til indkøbskurv
//function af onClick "handleAddToCart"
export default function Carditem({item, removeFromList, addToCart}) {

  function handleAddToCart(){
    addToCart(item);
    removeFromList(item);
  };
//return indhold af Carditem. her er opsætningen af objektet (item) aka Card
//under Card har vi elementerne Img, Body, Title, Text, Button
  return (
    <Card style={{ width: '18rem',  margin:'20px'}}>
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
