import React from "react";
import imagem1 from '../assets/compomentsroutesProdutos/imagem1.png'
import Stars from '../assets/compomentsroutesProdutos/Stars.png'
import notas from '../assets/compomentsroutesProdutos/notas.png'
import ImageCarousel from '../compoments/carrossel.jsx'
import botao from '../compoments/carrossel.jsx'


const Produtos = () => {
    return (
        <div >
            <div style={{backgroundColor: "#f9f8fe", display: "flex", justifyContent: "space-around", padding: "50px"}}>
                <div style={{}}>
                    <p>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino </p>
                    <img src={imagem1} alt="" />
                </div>
                <div style={{width: "900px"}}>
                    <h2 style={{fontSize: "65px"}}>Tênis Nike Revolution 6 Next Nature Masculino</h2>
                    <p>Casual | Nike | REF:38416711</p>
                    <div>
                        <img style={{paddingRight: "10px"}} src={Stars} alt="" />
                        <img src={notas} alt="" />
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <p style={{fontWeight: "bold", paddingRight: "10px", fontSize: "25px", margin: "0"}}>R$ 219,00</p>
                        <del><p>219,00</p></del>
                    </div>
                    <div>
                        <h2 style={{margin: "0", color: "#8F8F8F"}}>Descrição do produto</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis    nostrud exercitation ullamco.
                        </p>
                    </div>
                    <div >
                        <h2 style={{margin: "0", color: "#8F8F8F"}}>Tamanho</h2>
                        <div style={{ display: "flex"}}>
                            <div style={{width: "48px", height: "48px", border: "1px solid #CCCCCC", borderRadius: "8px", textAlign: "center", margin: "5px 5px 5px 0", fontWeight: "bold"}}>
                                <p>39</p>
                            </div>
                            <div style={{width: "48px", height: "48px", border: "1px solid #CCCCCC", borderRadius: "8px", textAlign: "center", margin: "5px", fontWeight: "bold"}}>
                                <p>40</p>
                            </div>
                            <div style={{width: "48px", height: "48px", border: "1px solid #CCCCCC", borderRadius: "8px", textAlign: "center", margin: "5px", fontWeight: "bold"}}>
                                <p>41</p>
                            </div>
                            <div style={{width: "48px", height: "48px", border: "1px solid #CCCCCC", borderRadius: "8px", textAlign: "center", margin: "5px", fontWeight: "bold"}}>
                                <p>42</p>
                            </div>
                            <div style={{width: "48px", height: "48px", border: "1px solid #CCCCCC", borderRadius: "8px", textAlign: "center", margin: "5px 0 5px 5px", fontWeight: "bold"}}>
                                <p>43</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h2 style={{margin: "0", color: "#8F8F8F"}}>Cores</h2>
                        <div style={{display: "flex"}}>
                            <div style={{width: "31px", height: "31px", borderRadius: "50%", textAlign: "center", margin: "5px", backgroundColor: "#6FEEFF"}}></div>
                            <div style={{width: "31px", height: "31px", borderRadius: "50%", textAlign: "center", margin: "5px", backgroundColor: "#FF6969"}}></div>
                            <div style={{width: "31px", height: "31px", borderRadius: "50%", textAlign: "center", margin: "5px", backgroundColor: "#5E5E5E"}}></div>
                            <div style={{width: "31px", height: "31px", borderRadius: "50%", textAlign: "center", margin: "5px", backgroundColor: "#6D70B7"}}></div>

                        </div>
                    </div>
                    <div>
                        <p>Butão</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Produtos;