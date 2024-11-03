import Header from "./compoments/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./compoments/Navbar";
import Home from "./compoments/routes/Home";
import Footer from "./compoments/Footer";

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