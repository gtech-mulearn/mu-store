import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
    return (
        <div className="relative overflow-hidden ">
            <Navbar />
            <Outlet />
        </div>
    );
};
