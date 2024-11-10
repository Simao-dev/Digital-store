import React, { useState } from 'react';
import "../CascataSelect/Cascata.css"

function CascadingMenu() {
  const [selectedOption, setSelectedOption] = useState('Ordernar por:');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    'Ordernar por: Preço crescente',
    'Ordernar por: Preço decrescente',
    'Ordernar por: Desconto crescente',
    'Ordernar por: Desconto decrescente',
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="MainCascata">
        <p>Resultados para “Tênis” - 389 produtos</p>
      <button onClick={toggleMenu}>
        {selectedOption} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <ul className='MenuCascata'>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CascadingMenu;