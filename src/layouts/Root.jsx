import { Outlet } from "react-router-dom";
import SocialIcons from "../components/shared/SocialIcons";
import Navbar from "../components/shared/Navbar";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative">
                <Outlet />
                <div className="fixed left-0 bottom-0 mb-4 ml-4">
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
};

export default Root;
