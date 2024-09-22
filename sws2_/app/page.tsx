"use client";

import Link from "next/link";

import NavBar from "./components/NavBar";
import HomeCard from "./components/Home/HomeCard";
import FAQs from "./components/FAQs/FAQs";
import Features from "./components/Feature/Feature";
import UsersGuide from "./components/UsersGuide/UsersGuide";
import Contacts from "./components/Contacts/Contacts";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import { ReactNode } from "react";

interface Route {
  id: number;
  path: string;
  element: ReactNode;
  section: string;
}

export const router: Route[] = [
  { id: 1, path: "/", element: <HomeCard />, section: "Home" },
  { id: 2, path: "#-features", element: <Features />, section: "Feature" },
  {
    id: 3,
    path: "#-users-guide",
    element: <UsersGuide />,
    section: "User Guide",
  },
  {
    id: 4,
    path: "#-testimonials",
    element: <Testimonials />,
    section: "Testimonials ",
  },
  { id: 5, path: "#-pricing", element: <Pricing />, section: "Pricing" },
  { id: 6, path: "#-faqs", element: <FAQs />, section: " FAQs" },
  { id: 7, path: "#-contact", element: <Contacts />, section: "Contact" },
];

const Home = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black">
        <NavBar router={router} />
        {router.map((route) => (
          <section
            className="bg-meroColor-jet-black"
            id={route.path.substring(1)}
            key={route.id}
          >
            <div>{route.element}</div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
