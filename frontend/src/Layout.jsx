import { Outlet } from "react-router-dom";
import MainMenu from "./Components/MainMenu";
import Footer from "./Components/Footer";

const Layout = () => {
    return (
        <div>
            <MainMenu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;