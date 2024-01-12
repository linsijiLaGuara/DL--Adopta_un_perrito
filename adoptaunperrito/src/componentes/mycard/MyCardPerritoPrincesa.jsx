/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../../assets/img/perritoprincesa.jpg";
import './MyCard.css';

function MyCardPerritoPrincesa({ tags }) {


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {tags.map((tagName, index) => (
          <Card.Title key={index}>{tagName}</Card.Title>
        ))}
        <Card.Text className="text"> Princesa es una perrita dulce y leal que busca amor y afecto. Con su elegante pelaje y mirada tierna, seguro se convertirá en la reina de tu corazón   y siempre está listo para recibir mimos y jugar 
        </Card.Text>
        <Button variant="warning">Adóptame</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCardPerritoPrincesa;
