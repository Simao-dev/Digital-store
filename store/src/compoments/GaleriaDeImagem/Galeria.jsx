import Imagem1 from "../../assets/GaleriaImg/image1.png"
import Imagem2 from "../../assets/GaleriaImg/image2.png"
import Imagem3 from "../../assets/GaleriaImg/image3.png"
import Imagem4 from "../../assets/GaleriaImg/image4.png"
import "../GaleriaDeImagem/Galeria.css"
import React, { useState } from 'react';

function GaleriaDeImagem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { url: Imagem1, alt: 'Imagem 1' },
    { url: Imagem2, alt: 'Imagem 2' },
    { url: Imagem3, alt: 'Imagem 3' },
    { url: Imagem4, alt: 'Imagem 4' },
  ];

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div>
        {images.map((image, index) => (
          <label key={index}>
            <input
              type="radio"
              name="image"
              value={index}
              checked={currentImageIndex === index}
              onChange={() => handleImageChange(index)}
            />
            {image.alt}
          </label>
        ))}
      </div>
      <img className="HomeTenis" src={images[currentImageIndex].url} alt={images[currentImageIndex].alt} />
    </div>
  );
}

export default GaleriaDeImagem;