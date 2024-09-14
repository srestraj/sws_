import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./app/pages/DefaultLayout";
import NotFound from "./app/pages/NotFound";
import HomePage from "./app/pages/home/HomePage";
import DiscoverPage from "./app/pages/discover/DiscoverPage";
import SciencePage from "./app/pages/science/SciencePage";
import EducationPage from "./app/pages/education/EducationPage";
import EventsPage from "./app/pages/events/EventsPage";
import ShopPage from "./app/pages/shop/ShopPage";
import SinglePage from "./app/components/singlepagelayout/SinglePage";
import AboutPage from "./app/pages/about/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
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
        element: <AboutPage />,
      },

      {
        path: "events",
        element: <EventsPage />,
      },

      {
        path: "shop",
        element: <ShopPage />,
      },

      {
        path: "single",
        element: <SinglePage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
