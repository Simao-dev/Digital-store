import React from "react";
import "../ProductOptions/ProductOptions.css"
import Array from "../ProductListing/ProductListing";
import CascadingMenu from "../CascataSelect/Cascata";


const Options = () => {

    return (

        <div>
            <div>
                <CascadingMenu />
            </div>
            <div className="Maincont">
                <div className="BordMain" >
                    <div className="MainFiltro">
                        <div className="IntFiltro">
                            <h2>Filtrar por</h2>
                        </div>
                        <div className="Marka">
                            <form action="">
                                <p>
                                    <strong>Marka</strong>
                                    <br />
                                    <input type="checkbox" name="marca" id="adidas" value="adidas" />
                                    <label for="adidas">Adidas</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="balenciaga" value="balenciaga" />
                                    <label for="balenciaga">balenciaga</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="K-Swiss" value="K-Swiss" />
                                    <label for="K-Swiss">K-Swiss</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Nike" value="Nike" />
                                    <label for="Nike">Nike</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Puma" value="Puma" />
                                    <label for="Puma">Puma</label>
                                    <p>
                                    <strong>Categoria</strong>
                                    <br />
                                    </p>
                                    <input type="checkbox" name="marca" id="EsporteeLazer" value="EsporteeLazer" />
                                    <label for="EsporteeLazer">Esporte e lazer</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Casual" value="Casual" />
                                    <label for="Casual">Casual</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Utilitário" value="Utilitário" />
                                    <label for="Utilitário">Utilitário</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Corrida" value="Corrida" />
                                    <label for="Corrida">Corrida</label>
                                    <br />
                                    <p>
                                    <strong>Gênero</strong>
                                    <br />
                                    </p>
                                    <input type="checkbox" name="marca" id="Masculino" value="Masculino" />
                                    <label for="Masculino">Masculino</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Feminino" value="Feminino" />
                                    <label for="Feminino">Feminino</label>
                                    <br />
                                    <input type="checkbox" name="marca" id="Unisex" value="Unisex" />
                                    <label for="Unisex">Unisex</label>
                                    <br />
                                    <p>
                                    <strong>Estado</strong>
                                    <br />
                                    <input type="radio" id="novo" name="estado" value="novo" />
                                    <label for="novo">Novo</label>
                                    <br />
                                    <input type="radio" id="novo" name="Usado" value="Usado" />
                                    <label for="Usado">Usado</label>
                                    </p>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <Array />
                </div>
            </div>
        </div>
    );
};
 export default Options;