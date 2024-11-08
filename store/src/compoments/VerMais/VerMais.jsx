import React from "react";
import { Link } from "react-router-dom";
import "../VerMais/VerMais.css"
import { PrimeIcons } from 'primereact/api'


const Vermais = () => {
    return (
        <div className="Main">
            <h2>Produtos em alta</h2>
        <Link to="/produtos"  className="Filho">Ver todos<i className="pi pi-arrow-right"></i></Link>
    </div>
    );
};

export default Vermais