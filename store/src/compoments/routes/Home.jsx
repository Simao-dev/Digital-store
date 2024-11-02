import Tenis from '../../assets/White-Sneakers-PNG-Clipart 1.png'
import Ornament from '../../assets/Ornament 11.png'
import React from "react";
import '/node_modules/primeflex/primeflex.css'
const Home = () => {

    return (
        <div>
            <div style={{backgroundColor: "#F5F5F5"}}>
                <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center"}}>
                    <div style={{width: "485px"}}>
                        <p style={{color: "#F6AA1C", fontWeight:"bold", fontSize: "24px"}}>Melhores ofertas personalizadas</p>
                        <h2 style={{ fontSize: "64px", margin: "0"}}>Queima de estoque Nike 🔥</h2>
                        <p style={{color: "#474747", fontSize: "24px"}}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                    </div>
                    <div>
                        <img style={{width: "800px"}} src={Tenis} alt="" />
                    </div>
                    <div style={{marginBottom: "320px"}}>
                    <img src={Ornament} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;