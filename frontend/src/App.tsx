import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "@pages/notFound";
import Signin from "@pages/signin";
import Signup from "@pages/signup";
import Layout from "@layouts/layout";
import DashboardLayout from "@layouts/dashboardLayout";
import Main from "@pages/main";
import Profile from "@pages/profile";

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
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        }
      ]
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
    </>
  );
}

export default App;
