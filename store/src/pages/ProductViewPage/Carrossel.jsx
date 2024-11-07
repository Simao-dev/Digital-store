import React, { useState } from 'react';
import imagem1 from '../../assets/compomentsroutesProdutos/imagem1.png';
import imagem2 from '../../assets/compomentsroutesProdutos/imagem2.png';
import imagem3 from '../../assets/compomentsroutesProdutos/imagem3.png';
import imagem4 from '../../assets/compomentsroutesProdutos/imagem4.png';
import imagem5 from '../../assets/compomentsroutesProdutos/imagem5.png';
import { PrimeIcons } from 'primereact/api'



const Carrossel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [imagem1, imagem2, imagem3, imagem4, imagem5];
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);   
  
    };
  
    return (
      <div>   
        <div className="ProdutoContainer">
          <div className="ImagemCarossel">
            <button onClick={handlePrevImage}><i className="pi pi-angle-left"></i></button>
            <img src={images[currentImageIndex]} alt="imagem dos produtos" />
            <button onClick={handleNextImage}><i className="pi pi-angle-right"></i></button>
          </div>
          <div className="Miniaturas">
            {images.map((image, index) => (
                <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={index === currentImageIndex ? 'active' : ''}
                >
                <img src={image} alt={`Thumbnail ${index}`} />
                </button>
                ))}
            </div>
          </div>
        </div>
    );
  };
  
  export default Carrossel;