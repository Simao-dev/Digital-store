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
            <div>
                <h2 style={{margin: "50px 80px"}}>Coleções em destaque</h2>
                <div style={{display: "flex", justifyContent: "center"}}>
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
            <div style={{textAlign: "center", margin: "100px 0 100px 0-*/-"}}>
                <h2>Coleções em destaque</h2>
                <img src={produtos} alt="" />
            </div>
        </div>
    );
};

export default Home;