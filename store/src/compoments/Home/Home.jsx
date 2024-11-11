import Tenis from '../../assets/White-Sneakers-PNG-Clipart 1.png';
import Ornament from '../../assets/Ornament 11.png';
import React from "react";
import '/node_modules/primeflex/primeflex.css';
import produtos from '../../assets/produtos.png';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import tenisC from '../../assets/tenisC.png';
import Array from '../ProductListing/ProductListing.jsx';
import Vermais from '../VerMais/VerMais.jsx';
import Colecao from '../Section/Section.jsx';
import "../Home/home.css"
const Home = () => {

    return (
        <div>
            <div className="MainHome">
                <div className="FilhoHome">
                    <div className="ContHome">
                        <p className="Text1Home">Melhores ofertas personalizadas</p>
                        <h2>Queima de estoque Nike 🔥</h2>
                        <p className="Text2Home">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <div className="ButtonHome">
                            <Link to= "/produtos"><Button label="Ver Ofertas" /></Link>
                        </div>
                    </div>
                    <div>
                        <img className="HomeTenis" src={Tenis} alt="Tenis Nike" />
                    </div>
                    <div className="HomeOrn">
                    <img src={Ornament} alt="" />
                    </div>
                </div>
            </div>
            <Colecao />
            <div className="HomeProdu" >
                <h2>Coleções em destaque</h2>
                <Link to="/produtos"><img src={produtos} alt="Produtos em destaque" /></Link>
            </div>
            <Vermais />
            <Array />
            <div className="HomeOfert">
                <div>
                    <div>
                        <img src={tenisC} alt=" Tenis Air Jordan" />
                    </div>
                </div>
                <div className="MainJordan">
                    <p className="text1Jordan" >Oferta especial</p>
                    <h2>Air Jordan edição de colecionador</h2>
                    <p className="text2Jordan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Link to="/produtos"><Button className="ButtonHome" label="Ver Ofertas" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;