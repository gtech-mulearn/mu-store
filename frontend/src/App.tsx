import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/notFound";
import Layout from "./components/layouts/layout";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile";
import Main from "./pages/main/Main";
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
      element: <Main />,
    },
    {
      path: "/dashboard",
      element: <Layout />,
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
    // {
    //   path: "/admin",
    //   element: <PrivateRoutes />,
    //   children: [
    //     {
    //       path: "/admin",
    //       element: <Navigate to="/admin/pricing" />,
    //     },
    //     {
    //       path: "/admin/",
    //       element: <LayoutAdmin />,
    //       children: [
    //         {
    //           path: "pricing/",
    //           element: <PricingAdmin />,
    //         },
    //         {
    //           path: "one-time-orders/",
    //           element: <OneTimeOrders />,
    //         },
    //         {
    //           path: "subscriptions/",
    //           element: <SubscriptionsAdmin />,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
