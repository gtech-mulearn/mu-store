import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import NotFound from "@pages/notFound";
import DashboardLayout from "@layouts/dashboardLayout";
import Profile from "@pages/profile";
import { AuthLayout, Signin } from "@/app/auth";
import { PublicHome, PublicLayout, AddProjects } from "@/app/(public)";
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
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <PublicHome />,
        },
        {
          path: "/project/add",
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
