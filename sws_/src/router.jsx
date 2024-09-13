import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/home/HomePage";
import DiscoverPage from "./pages/discover/DiscoverPage";
import SciencePage from "./pages/science/SciencePage";
import EducationPage from "./pages/education/EducationPage";
import EventsPage from "./pages/events/EventsPage";
import ShopPage from "./pages/shop/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "discover",
        element: <DiscoverPage />,
      },

      {
        path: "education",
        element: <EducationPage />,
      },

      {
        path: "science",
        element: <SciencePage />,
      },

      {
        path: "about-us",
        element: <DiscoverPage />,
      },

      {
        path: "events",
        element: <EventsPage />,
      },

      {
        path: "shop",
        element: <ShopPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
