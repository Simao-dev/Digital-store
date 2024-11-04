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
import prod from '../../assets/prod.png';


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
                            <Button className='border-round-xl' style={{backgroundColor: "#C92071", width: "240px", height: "48px", border: "none", color: "white"}} label="Ver Ofertas" />
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
            <div style={{backgroundColor: "#f9f8fe"}}>
                <h2 style={{margin: "0", padding: "50px 0 0 100px"}}>Coleções em destaque</h2>
                <div style={{display: "flex", justifyContent: "center", backgroundColor: "#f9f8fe"}}>
                    <div style={{display: "flex",backgroundColor: "#D8E3F2", width: "405px", height: "251px", borderRadius: "8px"}}>
                        <div style={{margin: "30px 0 30px 30px"}}>
                            <img src={off} alt="" />
                            <h2>Novo drop Supreme</h2>
                            <Button className='border-round-xl' style={{backgroundColor: "white", width: "148px", height: "48px", border: "none", color: "#C92071", fontWeight: "bold"}} label="Comprar" />
                        </div>
                        <div  style={{backgroundColor: "#D8E3F2", height: "251px", borderRadius: "8px"}}>
                            <img src={camisa} alt="" />
                        </div>
                    </div>
                    <div style={{display: "flex",backgroundColor: "#D8E3F2", width: "405px", height: "251px", borderRadius: "8px", margin: "0 50px 0 50px"}}>
                        <div style={{margin: "30px 0 30px 30px"}}>
                            <img src={off} alt="" />
                            <h2>Coleção Adidas</h2>
                            <Button className='border-round-xl' style={{backgroundColor: "white", width: "148px", height: "48px", border: "none", color: "#C92071", fontWeight: "bold"}} label="Comprar" />
                        </div>
                        <div  style={{backgroundColor: "#D8E3F2", height: "251px", borderRadius: "8px"}}>
                            <img src={tenisA} alt="" />
                        </div>
                    </div>
                    <div style={{display: "flex",backgroundColor: "#D8E3F2", width: "405px", height: "251px", borderRadius: "8px"}}>
                        <div style={{margin: "30px 0 30px 30px"}}>
                            <img src={off} alt="" />
                            <h2>Novo Beats Bass</h2>
                            <Button className='border-round-xl' style={{backgroundColor: "white", width: "148px", height: "48px", border: "none", color: "#C92071", fontWeight: "bold"}} label="Comprar" />
                        </div>
                        <div  style={{backgroundColor: "#D8E3F2", height: "251px", borderRadius: "8px"}}>
                            <img src={fone} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center", padding: "100px 0 100px 0", backgroundColor: "#f9f8fe"}}>
                <h2>Coleções em destaque</h2>
                <img src={produtos} alt="" />
            </div>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#f9f8fe"}}>
                <h2>Produtos em alta</h2>
                <Link to="/produtos" style={{fontSize: "20px", color: "#C92071", textDecoration: "none"}}>Ver todos</Link>
            </div>
            <div style={{backgroundColor: "#f9f8fe"}}>
                <div style={{display: "flex",flexDirection: "column", width: "292px", height: "439px", borderRadius: "8px", margin: "0 50px 0 50px"}}>
                    <div style={{backgroundColor: "white", width: "292px", height: "321px"}}>
                        <img  style={{width: "96px", height: "32px", margin: "20px 0 0 20px" }} src={off} alt="" />
                        <img style={{border: "20px 0 0 20px"}} src={prod} alt="" />
                    </div>
                    <div>
                        <p>Tenis</p>
                        <p style={{ fontSize: "25px", margin: "0"}}>K-Swiss V8 - Masculino</p>
                        <div style={{display: "flex"}}>
                            <p><del>$200</del></p>
                            <p style={{fontWeight: "bold", marginLeft: "20px"}}>$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;