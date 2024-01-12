import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./MyCard.css";

const MyCard = ({ id, name, description, img, buttonColor }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "100%", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text">{description}</Card.Text>
          <Button variant={buttonColor || "primary"}>Adóptame</Button>
        </Card.Body>
      </Card>
    </>
  );
};

MyCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  buttonColor: PropTypes.string,
};

MyCard.defaultProps = {
  id: 1,
  name: "Título por default",
  description: "Description por default",
  img: "",
  buttonColor: "primary",
};

export default MyCard;
