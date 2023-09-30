import React from 'react'
//Card importeret. 
import Card from 'react-bootstrap/Card';
//Button importeret
import Button from 'react-bootstrap/Button';


// //Dette er vores skabelon til vores kort som indeholder tøjet.
export default function Cartitem({item,})  {
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

                    <Button>Pay</Button>

                </Card.Body>
        </Card>
        
      
  )
}

