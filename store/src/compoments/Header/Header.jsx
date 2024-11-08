import Logo from '../../assets/logo.png'
import Carrinho from '../../assets/Carrinho.png'
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import '/node_modules/primeflex/primeflex.css';
import { Link } from "react-router-dom";
import "../Header/Header.css"

    const Header = () => {
        return (
            <div className="ContainerHeader">
                <Link to="/home" className="ContFi"><img src={Logo} alt="logo" /></Link>
                
                <div className="Mainbuscar">
                    <IconField iconPosition="left">
                        <InputText className ="BoxPesquisa "placeholder="Pesquisar produto..."/>
                        <InputIcon className="pi pi-search" style={{fontSize: "24px", marginLeft: "10px"}}> </InputIcon>
                    </IconField>
                </div>

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