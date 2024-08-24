import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
