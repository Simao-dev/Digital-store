import React from 'react';
import "../Categorias/Categorias.css"

const InformationCategoria = ({ title, informations }) => {
  return (
    <div className="MainCategorias">
      <h2>{title}</h2>
      <ul>
        {informations.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationCategoria;