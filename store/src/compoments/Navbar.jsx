import { Link } from "react-router-dom";
import '/node_modules/primeflex/primeflex.css'
import '../../src/cores.css'



const Navbar = () => {
    return (
        
        <nav  style={{marginBottom: "30px"}} className="pl-8 pt-6 text-2xl"> 
            <Link to="/home"style={{textDecoration: "none", color: "#474747",}} className="text-700 hover:text-pink-600">Home</Link>
            <Link to="/produtos" style={{textDecoration: "none", color: "#474747"}} className="pl-5 text-700 hover:text-pink-600 ">Produtos</Link>
            <Link to="/categorias" style={{textDecoration: "none", color: "#474747"}} className="pl-5 text-700 hover:text-pink-600">Categorias</Link>
            <Link to="/pedidos" style={{textDecoration: "none", color: "#474747"}} className="pl-5 text-700 hover:text-pink-600">Meus Pedidos</Link>
        </nav>
    );
};
export default Navbar;