import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

 function GridExample() {
  return (
    <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="C:\Users\moniq\Desktop\frontendProjekt2\clothing-shop\src\components\matas-katinas-7ITfJfAxxY4-unsplash.jpg" />
            <Card.Body>

                <Card.Text>
                <h2>Shirt</h2>

            <dl>
            <dt>Brand</dt>
            <dd>Adidas</dd>
            <dt>Size</dt>
            <dd>medium</dd>
            </dl>
            <h4>250,-</h4>

            
               </Card.Text>
                <Card.Title> 
                 <Button variant="warning" >
                    Add to cart
                 </Button> 
                </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;