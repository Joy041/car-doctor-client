import { Outlet } from "react-router-dom";
import Navbar from "../../SharedPage/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;