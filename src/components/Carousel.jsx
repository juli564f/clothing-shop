import "../components/carousel.css"


//Dette er billederne til de forskellige kort som er importeret. 
import Hoodie from "./hoodie-png-4-3601372402.png"
import Pants from "./bukser.png"
import Shirt from "./shirt.png"

//Button importeret
import Button from 'react-bootstrap/Button';

//Card importeret. 
import Card from 'react-bootstrap/Card';



function BasicExample() {
  return (
    //Jeg har lavet div til alle kortene sammen som hedder "cards"
    <div className='cards'>

      {/* Dette er kort 1 med Hoodien  */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Hoodie} alt="Hoodie" />
          <Card.Body>
            <Card.Title>Hoodie</Card.Title>
            <Card.Text>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel ut fugit minima at? Itaque non quasi possimus, tenetur temporibus minus cupiditate totam quia explicabo, veniam rem ipsa consectetur deserunt.</p>
              <p><span>Størrelse: </span>Medium </p>
              <p><span>Pris: </span>250 kr</p>

            </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>

      {/* Dette er kort 2 med pants.  */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Pants} alt="Pants" />
        <Card.Body>
          <Card.Title>Pants</Card.Title>
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel ut fugit minima at? Itaque non quasi possimus, tenetur temporibus minus cupiditate totam quia explicabo, veniam rem ipsa consectetur deserunt.</p>
              <p><span>Størrelse: </span>Medium </p>
              <p><span>Pris: </span>250 kr</p>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      {/* Dette er kort 3 med t shirt.  */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Shirt} alt="Shirt" />
        <Card.Body>
          <Card.Title>T-shirt</Card.Title>
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel ut fugit minima at? Itaque non quasi possimus, tenetur temporibus minus cupiditate totam quia explicabo, veniam rem ipsa consectetur deserunt.</p>
              <p><span>Størrelse: </span>Medium </p>
              <p><span>Pris: </span>250 kr</p>
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>    
    </div>


  );
}

export default BasicExample;

