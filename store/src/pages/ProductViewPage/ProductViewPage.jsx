import React from "react";
import imagem1 from '../../assets/compomentsroutesProdutos/imagem1.png'
import Stars from '../../assets/compomentsroutesProdutos/Stars.png'
import notas from '../../assets/compomentsroutesProdutos/notas.png'
import './ProductViewPage.css'

const Produtos = () => {
    return (
        <div >
            <div className="Main">
                <div>
                    <p>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino </p>
                    <img src={imagem1} alt="" />
                </div>
                <div className= "Info">
                    <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
                    <p>Casual | Nike | REF:38416711</p>
                    <div className="Avaliacoes">
                        <img className="Estrela" src={Stars} alt="" />
                        <img src={notas} alt="" />
                    </div>
                    <div className="MainPreco">
                        <p className="PrecoB">R$ 219,00</p>
                        <del><p>219,00</p></del>
                    </div>
                    <div className="Descricao">
                        <p className="Descri">Descrição do produto</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis    nostrud exercitation ullamco.
                        </p>
                    </div>
                    <div >
                        <p className="Descri">Tamanho</p>
                        <div className="MainTamanho">
                            <div className="Tamanho1">
                                <button>39</button>
                            </div>
                            <div className="Tamanho2">
                                <button>40</button>
                            </div>
                            <div  className="Tamanho2">
                                <button>41</button>
                            </div>
                            <div  className="Tamanho2">
                                <button>42</button>
                            </div>
                            <div  className="Tamanho3" >
                                <button>43</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p className="Cores">Cores</p>
                        <div className="MainCores">
                            <div className="SelectCores1">
                                <button></button>
                            </div>
                            <div className="SelectCores2">
                                <button></button>
                            </div>
                            <div className="SelectCores3">
                                <button></button>
                            </div>
                            <div className="SelectCores4">
                                <button></button>
                            </div>

                        </div>
                    </div>
                    <div className="BotaoComprar">
                        <button type="submit">COMPRAR</button>
                    </div>
                </div>
            </div>
            <div>
                <div >
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Produtos;