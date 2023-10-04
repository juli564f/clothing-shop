import React from 'react'

//Card importeret. 
import Card from 'react-bootstrap/Card';
//Button importeret
import Button from 'react-bootstrap/Button';


//Dette er vores skabelon til vores kort som indeholder tøjet.
export default function Carditem({item}) {
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
            
         <Button variant="primary">Remove from cart</Button>
        </Card.Body>
  </Card>
  )
}
 

  // return (
  //   <article className="card">
      
  //     <input type="checkbox" id={cartItem.content} />
  //     <label htmlFor={cartItem.content}>{cartItem.content}</label>
  //   </article>
  // );

