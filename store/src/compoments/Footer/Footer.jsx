import logoBranca from '../../assets/logoBranca.png'
import React from "react";
import 'primeicons/primeicons.css';
import "../Footer/Footer.css"

const Footer = () => {
    return (  
        <>
            <div className="Footermain">
                <div className="footerlogo">
                    <img src={logoBranca} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="MainRedes">
                        <a href="https://www.facebook.com/?locale=pt_BR" target='_blank'><i className="pi pi-facebook"></i></a>
                        <a href="" target='_blank'><i className="pi pi-instagram"></i></a>
                        <a href="" target='_blank'><i className="pi pi-twitter"></i></a>
                    </div>
                </div>
                <div className="MainInforomações">
                    <h3>Informação</h3>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus Pedidos</p>
                </div>
                <div className="MainCategorias">
                    <h3>Categorias</h3>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div className="MainContato">
                    <h3>Contato</h3>
                    <p>
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <div className="Digital">
                <p>@ 2022 Digital College</p>
            </div>
        </>
    );
}
 
export default Footer;
