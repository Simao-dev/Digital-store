import Header from "../src/compoments/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../src/compoments/Navbar/Navbar";
import Footer from "../src/compoments/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Navbar/>
            <Outlet />
            <Footer />           
        </>
    );
}
export default App;