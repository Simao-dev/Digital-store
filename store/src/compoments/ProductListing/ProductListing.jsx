import imagemProduto1 from '../../assets/carde.png'
import imagemProduto2 from '../../assets/carde1.png'
import '../ProductListing/ProductListing.css'
import { Link } from 'react-router-dom';

const Array = () =>{
    const itens = [
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto1,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto1,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto2,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto2,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto2,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto2,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto2,
        preco: 200,
        precoComDesconto: 100
      },
      {
        nome: 'Tênis',
        tipo: 'K-Swiss V8 - Masculino',
        imagem: imagemProduto2,
        preco: 200,
        precoComDesconto: 100
      },
    ];
    return (
      <div style={{backgroundColor: "#f9f8fe", paddingTop: "50px"}}>
      <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
      {itens.map((itens) => (
          <div style={{display: "flex", flexDirection: "column"}} key={itens.nome}>
              <Link to="/produtos"><img style={{width: "400px", height: "410px"}} src={itens.imagem} alt={itens.nome} /></Link>
              <div>
                  <p style={{color: "#8F8F8F"}}>{itens.nome}</p>
                  <p style={{color: "#474747", fontSize: "24px", margin: "5px"}}>{itens.tipo}</p>
                  <div style={{display: "flex"}}>
                      <p style={{color: "#8F8F8F", marginRight: "8px", fontSize: "24px"}}><del>${itens.preco.toFixed(2)}</del></p>
                      <p style={{ fontWeight: "bold", fontSize: "24px", color: "#1F1F1F"}}>${itens.precoComDesconto.toFixed(2)}</p>
                  </div>
              </div>
          </div>
          ))}
      </div>
  </div>
    );
    };
export default Array;