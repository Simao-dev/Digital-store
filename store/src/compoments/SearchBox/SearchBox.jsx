import React, {useState, useEffect} from "react";
import 'primeicons/primeicons.css';

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
                <input type="text" id="searchInput" placeholder="Digite sua pesquisa" />
                <button type="submit">Pesquisar</button>
            </form>
        </div>
    );
};

export default SearchBox;