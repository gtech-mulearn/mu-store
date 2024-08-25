import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import NotFound from "@pages/notFound";
import Layout from "@layouts/layout";
import DashboardLayout from "@layouts/dashboardLayout";
import Main from "@pages/main";
import Profile from "@pages/profile";
import AddProjects from "./pages/addProjects";
import { AuthLayout, Signin } from "@/app/auth";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [{
        path: "signin",
        element: <Signin />,
      }]
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/addProjects",
          element: <AddProjects />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Navigate to="/dashboard/profile" />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
}

export default App;
