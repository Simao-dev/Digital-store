import logoBranca from '../assets/logoBranca.png'
import React from "react";
import 'primeicons/primeicons.css';

const Footer = () => {
    return (  
        <>
            <div style={{backgroundColor: " #1F1F1F", display: "flex", justifyContent: "space-around", color: "white", height: "400px"}}>
                <div style={{marginTop: "40px", width: "450px"}}>
                    <img style={{marginBottom: "40px"}} src={logoBranca} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div style={{display: "flex"}}>
                        <a href="https://www.facebook.com/?locale=pt_BR" target='_blank'  style={{color: "white", margin: "10px"}}><i className="pi pi-facebook"></i></a>
                        <a href="" target='_blank' style={{color: "white", margin: "10px"}}><i className="pi pi-instagram"></i></a>
                        <a href="" target='_blank' style={{color: "white", margin: "10px"}}><i className="pi pi-twitter"></i></a>
                    </div>
                </div>
                <div style={{marginTop: "40px", width: "250px"}}>
                    <h3 style={{marginBottom: "40px"}}>Informação</h3>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus Pedidos</p>
                </div>
                <div style={{marginTop: "40px", width: "250px"}}>
                    <h3 style={{marginBottom: "40px"}}>Categorias</h3>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div style={{marginTop: "40px", width: "250px"}}>
                    <h3 style={{marginBottom: "40px"}}>Contato</h3>
                    <p>
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <div style={{backgroundColor: " #1F1F1F", color: "white", textAlign: "center"}}>
                <p style={{margin: "0", padding: "20px"}}>@ 2022 Digital College</p>
            </div>
        </>
    );
}
 
export default Footer;
