import React from "react";
import Proptypes from "prop-types";

const Card = ({
  title,
  content,
  categoria,
  image_url,
  precio,
  handleNewProduct,
  id,
}) => {
  return (
    <div className="card">
      <img src={image_url} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="fw-2">{categoria}</p>
        <p className="card-text">{content}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleNewProduct({
              title,
              image_url,
              categoria,
              precio,
              content,
              id,
            });
          }}
        >
          Agregar: ${precio}
        </button>
      </div>
    </div>
  );
};

Card.proptypes = {
  title: Proptypes.string,
  image_url: Proptypes.string,
  categoria: Proptypes.string,
  price: Proptypes.number,
  content: Proptypes.string,
};

export default Card;
