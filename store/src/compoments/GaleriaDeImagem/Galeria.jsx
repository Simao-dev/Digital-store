import Imagem1 from "../../assets/GaleriaImg/image1.png";
import Imagem2 from "../../assets/GaleriaImg/image2.png";
import Imagem3 from "../../assets/GaleriaImg/image3.png";
import Imagem4 from "../../assets/GaleriaImg/image4.png";
import "../GaleriaDeImagem/Galeria.css";
import React, { useState } from "react";

function GaleriaDeImagem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { url: Imagem1, alt: "" },
    { url: Imagem2, alt: "" },
    { url: Imagem3, alt: "" },
    { url: Imagem4, alt: "" },
  ];

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (

      <div className="image-container">
        <img
          className="HomeTenisN"
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].alt}
        />
        <div className="radio-overlay">
          {images.map((image, index) => (
            <label key={index}>
              <input
                type="radio"
                name="image"
                value={index}
                checked={currentImageIndex === index}
                onChange={() => handleImageChange(index)}
              />
              <span className="radio-indicator"></span>
            </label>
          ))}
        </div>

    </div>
  );
}

export default GaleriaDeImagem;