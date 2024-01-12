/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/img/perrirtopeque.jpg';
import './MyCard.css';

function MyCardPerritoPeque({ tags }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {tags.map((tagName, index) => (
          <Card.Title key={index}>{tagName}</Card.Title>
        ))}
        <Card.Text className="text">Messi, un perrito juguetón y cariñoso, está listo para un nuevo hogar. Su pequeño tamaño es perfecto para adaptarse a cualquier estilo de vida, y siempre está listo para recibir mimos y jugar.</Card.Text>
        <Button variant="danger">Adóptame</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCardPerritoPeque;