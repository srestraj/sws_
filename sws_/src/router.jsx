import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/home/HomePage";
import DiscoverPage from "./pages/discover/DiscoverPage";
import SciencePage from "./pages/science/SciencePage";
import EducationPage from "./pages/education/EducationPage";
import EventsPage from "./pages/events/EventsPage";
import ShopPage from "./pages/shop/ShopPage";
import SinglePage from "./components/singlepagelayout/SinglePage";
import AboutPage from "./pages/about/AboutPage";

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
