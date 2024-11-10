import imagemProduto1 from '../../assets/carde.png';
import imagemProduto2 from '../../assets/carde1.png';
import '../ProductListing/ProductListing.css';
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
      <div  className="ProdRelacionados">
      <div className="ProdFilho">
      {itens.map((itens) => (
          <div className="Container" key={itens.nome}>
              <Link to="/pedidos" className="LinkProd"><img src={itens.imagem} alt={itens.nome} /></Link>
              <div>
                  <p className="ItemNome">{itens.nome}</p>
                  <p className="ItemTipo" >{itens.tipo}</p>
                  <div className="ContPreco">
                      <p className="PrecoSemDes"><del>${itens.preco.toFixed(2)}</del></p>
                      <p className="PrecoComDes">${itens.precoComDesconto.toFixed(2)}</p>
                  </div>
              </div>
          </div>
          ))}
      </div>
  </div>
    );
  };
export default Array;