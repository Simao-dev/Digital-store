import React from "react";
import 'primeicons/primeicons.css';
import "../Footer/Footer.css";
import LogoBranca from "../Logo/LogoBranca";
import Informacoes from "../Informacao/Informacao"
import Cetorias from "../Categorias/Categorias";
import Contatos from "../Contatos/Contatos";


const Footer = () => {
    return (  
        <>
            <div className="Footermain">
                <div className="footerlogo">
                    <LogoBranca />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="MainRedes">
                        <a href="https://www.facebook.com/digitalcollegebr/" target='_blank'><i className="pi pi-facebook"></i></a>
                        <a href="https://www.instagram.com/digitalcollegebr/" target='_blank'><i className="pi pi-instagram"></i></a>
                        <a href="https://x.com/eaicollegers" target='_blank'><i className="pi pi-twitter"></i></a>
                    </div>
                </div>
                <div>
                    <Informacoes />
                </div>
                <div>
                    <Cetorias />
                </div>
                <div>
                    <Contatos />
                </div>
            </div>
            <div className="Digital">
                <p>@ 2022 Digital College</p>
            </div>
        </>
    );
}
 
export default Footer;
