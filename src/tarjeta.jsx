import React from 'react';

const Tarjeta = ({ Titulo, Descripción, Imagen }) => {
  return (
    <div className="tarjeta">
      <img src={Imagen} alt={Titulo} className="tarjeta-img" />
      <h2>{Titulo}</h2>
      <p>{Descripción}</p>
    </div>
  );
};

export default Tarjeta;
