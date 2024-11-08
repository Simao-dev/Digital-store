import { Link } from "react-router-dom";
import '/node_modules/primeflex/primeflex.css'
import "../Navbar/Navbar.css"



const Navbar = () => {
    return (
        
        <nav className="ContainerNav"> 
            <Link to="/home" className="LinksHome">Home</Link>
            <Link to="/produtos" className="LinksHome">Produtos</Link>
            <Link to="/categorias" className="LinksHome">Categorias</Link>
            <Link to="/pedidos" className="LinksHome">Meus Pedidos</Link>
        </nav>
    );
};
export default Navbar;