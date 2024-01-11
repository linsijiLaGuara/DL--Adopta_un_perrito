import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/img/perrirtopeque.jpg';

function MyCardPerritoPeque() {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={img} />
    
      <Card.Body>
        <Card.Title>Perrito Blanco</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">adopta aca</Button>
      </Card.Body>
    </Card>
    


  );
}

export default MyCardPerritoPeque;