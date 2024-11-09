import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import "../Logo/Logo.css"
const Imagem = () => {

    return (
        
        <div className="LogoImg">
            <Link to= "/home"><img src={Logo} alt="logo" title="logo da loja" /></Link>
        </div>

    );
}

export default Imagem;