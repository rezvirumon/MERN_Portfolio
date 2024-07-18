import { Outlet } from "react-router-dom";
import SocialIcons from "../components/shared/SocialIcons";

const Root = () => {
    return (
        <div className="relative">
            <Outlet />
            <div className="fixed left-0 bottom-0 mb-4 ml-4">
                <SocialIcons />
            </div>
        </div>
    );
};

export default Root;
