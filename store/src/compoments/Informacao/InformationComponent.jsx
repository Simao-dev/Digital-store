import React from 'react';
import "../Informacao/informacao.css"

const InformacaoComponente = ({ title, informations }) => {
  return (
    <div className="MainInfomacoes">
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

export default InformacaoComponente;