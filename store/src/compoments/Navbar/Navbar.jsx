import { Link, useLocation} from "react-router-dom";
import '/node_modules/primeflex/primeflex.css'
import "../Navbar/Navbar.css"



const Navbar = () => {

    const location = useLocation();

    return (
        
        <nav className="ContainerNav"> 
            <Link to="/home" className={`LinksHome ${location.pathname === '/home' ? 'active' : ''}`}>Home</Link>
            <Link to="/produtos" className={`LinksHome ${location.pathname === '/produtos' ? 'active' : ''}`}>Produtos</Link>
            <Link to="/categorias" className={`LinksHome ${location.pathname === '/categorias' ? 'active' : ''}`}>Categorias</Link>
            <Link to="/pedidos" className={`LinksHome ${location.pathname === '/pedidos' ? 'active' : ''}`}>Meus Pedidos</Link>
        </nav>
    );
};
export default Navbar;