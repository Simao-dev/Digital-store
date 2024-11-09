import React from 'react';
import "../Contatos/Contatos.css"

const InformacoesContatos = ({ title, informations }) => {
  return (
    <div className="MainContato">
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

export default InformacoesContatos;