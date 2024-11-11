import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import off from '../../assets/off.png';
import camisa from '../../assets/camisa.png';
import fone from '../../assets/fone.png';
import tenisA from '../../assets/tenisA.png';
import "../Section/Section.css"


const Colecao = () => {

    return (
        <div className="Principal">
            <h2 className="Destaque">Coleção destaque</h2>
             <div className="ColecaoMain">
                <div className="ColecaoCard1">
                    <div className="CardFilho">
                        <img src={off} alt="" />
                        <h2>Novo drop Supreme</h2>
                        <Link to="/pedidos"><Button label="Comprar" /></Link>
                    </div>
                    <div className="CamImg">
                        <img src={camisa} alt="" />
                    </div>
                </div>
                <div className="ColecaoCard1">
                    <div className="CardFilho">
                        <img src={off} alt="" />
                        <h2>Coleção Adidas</h2>
                        <Link to="/pedidos"><Button label="Comprar" /></Link>
                    </div>
                    <div className="CamImg">
                        <img src={tenisA} alt="" />
                    </div>
                </div>
                <div className="ColecaoCard1">
                    <div className="CardFilho">
                        <img src={off} alt="" />
                        <h2>Novo Beats Bass</h2>
                        <Link to="/pedidos"><Button label="Comprar" /></Link>
                    </div>
                    <div className="CamImg">
                        <img src={fone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colecao;