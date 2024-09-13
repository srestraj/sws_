import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
