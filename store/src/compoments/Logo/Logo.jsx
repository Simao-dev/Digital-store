import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
const Imagem = () => {

    return (

        <div className="LogoImg">
            <Link to= "/home"><img src={Logo} alt="logo" title="logo da loja" /></Link>
        </div>

    );
}

export default Imagem;