/* eslint-disable react/prop-types */
import React from "react";
import MyCard from "../mycard/MyCard";
import "./Tags.css"; // Asegúrate de importar tu hoja de estilos

const Tags = ({ props }) => {
  return (
    <>
      <div className="tags-flex">
        {props.length &&
          props.map((tag) => (
            <MyCard
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
