import Tenis from '../../assets/White-Sneakers-PNG-Clipart 1.png'
import Ornament from '../../assets/Ornament 11.png'
import React from "react";
import '/node_modules/primeflex/primeflex.css'
import camisa from '../../assets/camisa.png'
import tenisA from '../../assets/tenisA.png'
import fone from '../../assets/fone.png'
import produtos from '../../assets/produtos.png'
import { Button } from 'primereact/button';
import off from '../../assets/off.png'
import { Link } from 'react-router-dom';
import tenisC from '../../assets/tenisC.png'
import Array from '../ProductListing/ProductListing.jsx';
import Vermais from '../VerMais/VerMais.jsx';
import Colecao from '../ColecaoDestaque/ColecaoDestaque.jsx';
const Home = () => {

    return (
        <div>
            <div style={{backgroundColor: "#F5F5F5"}}>
                <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center"}}>
                    <div style={{width: "485px"}}>
                        <p style={{color: "#F6AA1C", fontWeight:"bold", fontSize: "24px"}}>Melhores ofertas personalizadas</p>
                        <h2 style={{ fontSize: "64px", margin: "0"}}>Queima de estoque Nike 🔥</h2>
                        <p style={{color: "#474747", fontSize: "24px"}}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <div className="card flex">
                            <Link to= "/produtos"><Button className='border-round-xl' style={{backgroundColor: "#C92071", width: "240px", height: "48px", border: "none", color: "white"}} label="Ver Ofertas" /></Link>
                        </div>
                    </div>
                    <div>
                        <img style={{width: "800px"}} src={Tenis} alt="" />
                    </div>
                    <div style={{marginBottom: "320px"}}>
                    <img src={Ornament} alt="" />
                    </div>
                </div>
            </div>
            <Colecao />
            <div style={{textAlign: "center", padding: "100px 0 100px 0", backgroundColor: "#f9f8fe"}}>
                <h2>Coleções em destaque</h2>
                <Link to="/produtos"><img src={produtos} alt="" /></Link>
            </div>
            <Vermais />
            <Array />
            <div style={{display: "flex", justifyContent: "space-around", margin: "100px 0 50px 0"}}>
                <div>
                    <div>
                        <img src={tenisC} alt="" />
                    </div>
                </div>
                <div style={{width: "596px", height: "341px"}}>
                    <p style={{color: "#C92071", fontWeight: "bold"}}>Oferta especial</p>
                    <h2 style={{fontSize: "50px", color: "#474747"}}>Air Jordan edição de colecionador</h2>
                    <p style={{fontSize: "24px", color: "#474747"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Link to="/produtos"><Button className='border-round-xl' style={{backgroundColor: "#C92071", width: "200px", height: "40px", border: "none", color: "white"}} label="Ver Ofertas" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;