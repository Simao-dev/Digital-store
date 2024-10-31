import { Link } from "react-router-dom";
import '/node_modules/primeflex/primeflex.css'


const Navbar = () => {
    return (
        <nav className="pl-8 pt-6 text-2xl"> 
            <Link to="/"style={{textDecoration: "none", color: "#474747"}}>Home</Link>
            <Link to="/produtos" style={{textDecoration: "none", color: "#474747"}} className="pl-5">Produtos</Link>
            <Link to="/categorias" style={{textDecoration: "none", color: "#474747"}} className="pl-5">Categorias</Link>
            <Link to="/pedidos" style={{textDecoration: "none", color: "#474747"}} className="pl-5">Meus Pedidos</Link>
        </nav>
    );
};
export default Navbar;