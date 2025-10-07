import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Registers from "../Pages/Registers";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registers></Registers>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    Component: NewsDetails,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
export default router;
