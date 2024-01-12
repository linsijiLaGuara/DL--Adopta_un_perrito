/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../../assets/img/perritogrande.jpg";



function MyCardPerritoGrande({ tags }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {tags.map((tagName, index) => (
          <Card.Title key={index}>{tagName}</Card.Title>
        ))}
        <Card.Text>Gohan, un perrito inteligente y activo, está listo para ser parte de tu familia. Su entusiasmo y lealtad hacen que sea el compañero ideal para alguien que ama la vida al aire libre.</Card.Text>
        <Button variant="primary">Adóptame</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCardPerritoGrande;
