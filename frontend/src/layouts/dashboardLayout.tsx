import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
function DashboardLayout() {
  return (
    <div className="min-h-screen w-full flex p-4 gap-5">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">{"title"}</h1>
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </header>
        {/* dynamic content based on rout */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
