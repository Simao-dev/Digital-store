import React, { useState } from 'react';
import imagem1 from '../assets/compomentsroutesProdutos/imagem1.png';
import imagem2 from '../assets/compomentsroutesProdutos/imagem2.png';
import imagem3 from '../assets/compomentsroutesProdutos/imagem3.png';
import imagem4 from '../assets/compomentsroutesProdutos/imagem4.png';
import imagem5 from '../assets/compomentsroutesProdutos/imagem5.png';



const Produtos = () => {
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
  
        <div className="product-container">
          <div className="image-carousel">
            <img src={images[currentImageIndex]} alt="Product Image" />
            <button onClick={handlePrevImage}>Anterior</button>
            <button onClick={handleNextImage}>Próximo</button>
          </div>
          <div className="product-details">
            <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
            <p>Casual | Nike | REF:38416711</p>
            <div className="ratings">
              <img src={Stars} alt="Ratings" />
              <img src={notas} alt="Ratings" />
            </div>
            <div className="price">
              <p>R$ 219,00</p>
              <del><p>219,00</p></del>
            </div>
            {/* ... other product details ... */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Produtos;