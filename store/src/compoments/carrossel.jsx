import React, { useState } from 'react';
import imagem1 from '../assets/compomentsroutesProdutos/imagem1.png'
import imagem2 from '../assets/compomentsroutesProdutos/imagem2.png'
import imagem3 from '../assets/compomentsroutesProdutos/imagem3.png'
import imagem4 from '../assets/compomentsroutesProdutos/imagem4.png'
import imagem5 from '../assets/compomentsroutesProdutos/imagem5.png'

function ImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [{imagem1}, {imagem2}, {imagem3}, {imagem4}, {imagem5}];
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length)   
   % images.length);
    };
  
    return   
   (
      <div>
        <img src={images[currentImageIndex]} alt="Imagem do carrossel" />
        <button onClick={handlePrevImage}>Anterior</button>
        <button onClick={handleNextImage}>Próximo</button>
      </div>
    );
  }
  
  export default ImageCarousel;