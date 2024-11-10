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
                <div className="MainFiltro">
                    <h2>Filtrar por</h2>
                </div>
                <Array />
            </div>
        </div>
    );
};
 export default Options;