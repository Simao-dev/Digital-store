import Logo from '../assets/logo.png'
import Carrinho from '../assets/Carrinho.png'
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import '/node_modules/primeflex/primeflex.css';
import { Link } from "react-router-dom";

    const Header = () => {
        return (
            <div className='flex justify-content-around' style={{marginTop: "40px"}}>
                
                <Link to="/home"><img style={{width: "253px", height:"44px"}} src={Logo} alt="logo" /></Link>
                
                <div className="flex gap-3 ">
                    <IconField iconPosition="left">
                        <InputText className ="border-round-xl "placeholder="Pesquisar produto..."  style={{width: "559px", height: "60px", fontSize: "25px", paddingLeft: "20px", backgroundColor: " rgb(71 71 71 / 4%)", border: "none"}} />
                        <InputIcon className="pi pi-search" style={{fontSize: "24px", marginLeft: "10px"}}> </InputIcon>
                    </IconField>
                </div>

                <div>
                    <p style={{textDecoration: "underline", fontSize: "16px", color: "#474747"}}>Cadastre-se</p>
                </div>
                <div className="card flex justify-content-center">
                    <Button className='border-round-xl' style={{backgroundColor: "#C92071", width: "144px", height: "40px", border: "none", color: "white"}} label="Entrar" />
                </div>
                
                <img src={Carrinho} alt="carrinho de compras" style={{width: "33px", height: "29px"}} />
            </div>
            
            
    );
      
} 

export default Header;