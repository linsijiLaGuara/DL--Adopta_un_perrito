/* eslint-disable react/prop-types */
import React from "react";
import MyCardPerritoGrande from "../mycard/MyCardPerritoGrande";
import "./Tags.css"; // Asegúrate de importar tu hoja de estilos

const Tags = ({ props }) => {
  return (
    <>
      <div className="tags-flex">
        {props.length &&
          props.map((tag) => (
            <MyCardPerritoGrande
              key={tag.id}
              name={tag.name}
              description={tag.description}
              img={tag.img}
              buttonColor={tag.buttonColor}
            />
          ))}
      </div>
    </>
  );
};

export default Tags;
