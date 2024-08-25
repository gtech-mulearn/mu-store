import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "@pages/notFound";
import Signin from "@pages/signin";
import Layout from "@layouts/layout";
import DashboardLayout from "@layouts/dashboardLayout";
import Main from "@pages/main";
import Profile from "@pages/profile";
import AddProjects from "./pages/addProjects";
import Leaderboard from "./pages/leaderboard";

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
    {
      path: "/leaderboard",
      element: <Leaderboard />,
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
