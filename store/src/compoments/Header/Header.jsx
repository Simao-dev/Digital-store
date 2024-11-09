import Carrinho from '../../assets/Carrinho.png'
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import '/node_modules/primeflex/primeflex.css';
import "../Header/Header.css"
import SearchBox from '../SearchBox/SearchBox';
import Imagem from '../Logo/Logo';

    const Header = () => {
        return (
            <div className="ContainerHeader">
                
                <Imagem />
                
                <SearchBox />

                <div className="Cadast">
                    <p>Cadastre-se</p>
                </div>
                <div className="BtnOfertas">
                    <Button label="Entrar" />
                </div>
                
                <img src={Carrinho} alt="carrinho de compras" className="carrinho" />
            </div>
            
            
    );
      
} 

export default Header;