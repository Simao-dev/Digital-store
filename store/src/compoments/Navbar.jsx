import { Link } from "react-router-dom";
import '/node_modules/primeflex/primeflex.css'


const Navbar = () => {
    return (
        <nav > 
            <Link to="/produtos" style={{textDecoration: "none"}}>Produtos</Link>
            <Link to="/categorias" style={{textDecoration: "none"}}>Categorias</Link>
            <Link to="/pedidos" style={{textDecoration: "none"}}>Meus Pedidos</Link>
        </nav>
    );
};
export default Navbar;