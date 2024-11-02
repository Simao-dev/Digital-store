import Header from "./compoments/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./compoments/Navbar";
import Home from "./compoments/routes/Home";
const App = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />           
        </>
    );
}
export default App;