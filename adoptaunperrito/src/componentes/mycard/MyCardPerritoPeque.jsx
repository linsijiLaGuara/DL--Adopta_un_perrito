/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/img/perrirtopeque.jpg';


function MyCardPerritoPeque({ tags }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {tags.map((tagName, index) => (
          <Card.Title key={index}>{tagName}</Card.Title>
        ))}
        <Card.Text></Card.Text>
        <Button variant="danger">Adóptame</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCardPerritoPeque;