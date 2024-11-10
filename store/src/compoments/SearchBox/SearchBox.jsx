import React, {useState, useEffect} from "react";
import 'primeicons/primeicons.css';
import "../SearchBox/SearchBox.css"

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault(),

        setSearchTerm(event.target.searchInput.value);
    };

    useEffect(() => {
        if (searchTerm) {
            window.location.href = `/options?q/=${searchTerm}`;
        }
    }, [searchTerm]);
    
    return (
        <div className="Mainbuscar">
            <form onSubmit={handleSubmit}>
                <input type="text" id="searchInput" placeholder="Pesquisar produto..." />
                <button type="submit"><span className="pi pi-search"></span></button>
            </form>
        </div>
    );
};

export default SearchBox;