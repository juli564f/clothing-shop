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


/*Card importeret. 
import Card from 'react-bootstrap/Card';




// //Dette er vores skabelon til vores kort som indeholder tøjet.
export default function Cartitem({item,})  {
  return (
          
          <Card style={{ width: '10rem', }}>
              <Card.Img variant="top" src={item.img} alt="Hoodie" />
              <Card.Body>
                  <Card.Title> <span>{item.title}</span></Card.Title>
                  <Card.Text>
                      <p>{item.text}</p>
                      <p><span>Størrelse:</span> {item.size} </p>
                      <p><span> Pris: </span>{item.price}</p>
      
                  </Card.Text>

                    
                </Card.Body>
        </Card>
        
      
  )
}
*/
// Her modtager vi data via props. Vi kan ikke se hvad den hedder,
// men det står i parent-komponenten (MainContent)
/*export default function CartItem({ cartItem }) {
  // // Destructuring i js!
  // const person =  {firstname: 'Oliver', email: 'oliver@oliver.dk'};
  // const {firstname, email} = person; // destructuring.
  // // const firstname og email som indeholder værdierne 'Oliver' og 'oliver@oliver.dk'.

  // // Dette gør det samme som eksemplet med destructuring
  // const firstname2 = person.firstname;
  // const email2 = person.email;
  

  <Card style={{ width: '10rem', }}>
              <Card.Img variant="top" src={item.img} alt="Hoodie" />
              <Card.Body>
                  <Card.Title> <span>{item.title}</span></Card.Title>
                  <Card.Text>
                      <p>{item.text}</p>
                      <p><span>Størrelse:</span> {item.size} </p>
                      <p><span> Pris: </span>{item.price}</p>
      
                  </Card.Text>

                    
                </Card.Body>
        </Card>


 

  return (
    <article className="card">
      
      <input type="checkbox" id={cartItem.content} />
      <label htmlFor={cartItem.content}>{cartItem.content}</label>
    </article>
  );
}
*/