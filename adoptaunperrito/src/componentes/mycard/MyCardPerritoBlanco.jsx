/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/img/perrirtoblanco.jpg';

function MyCardPerritoBlanco({ tags }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {tags.map((tagName, index) => (
          <Card.Title key={index}>{tagName}</Card.Title>
        ))}
        <Card.Text>Bartolo es un perrito lleno de energía y alegría. Con su pelaje suave y ojos tiernos, es el compañero perfecto para actividades al aire libre y largos paseos.!</Card.Text>
        <Button variant="success">Adóptame</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCardPerritoBlanco;