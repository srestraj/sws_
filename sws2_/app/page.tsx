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

const router = [
  { id: 1, path: "/", element: <HomeCard />, section: " " },
  { id: 2, path: "/features", element: <Features />, section: " " },
  { id: 3, path: "/users-guide", element: <UsersGuide />, section: " " },
  { id: 4, path: "/testimonials", element: <Testimonials />, section: " " },
  { id: 5, path: "/pricing", element: <Pricing />, section: " " },
  { id: 6, path: "/faqs", element: <FAQs />, section: " " },
  { id: 7, path: "/contact", element: <Contacts />, section: " " },
];

/*  
const navRoutes = [
  { id: 1, linkTitle: "Feature", routes: "features" },
  { id: 2, linkTitle: "User Guide", routes: "user-guide" },
  { id: 3, linkTitle: "Testimonials", routes: "testimonials" },
  { id: 4, linkTitle: "Pricing", routes: "pricing" },
  { id: 5, linkTitle: "FAQs", routes: "faqs" },
  { id: 6, linkTitle: "Contact", routes: "contact" },
]; */

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <nav>
          {router.map((route) => (
            <Link href={route.path} key={route.id}>
              {route.section}
            </Link>
          ))}
        </nav>

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

/* 


"use client";

import Link from "next/link";

import Contact from "./contact/page";
import NavBar from "./components/NavBar";
import HomeCard from "./HomeCard";
// import NavBar from "../components/NavBar";
// import Home from "./home/page";

const router = [
  { id: 1, path: "#us-home", section: "Home" },
  { id: 2, path: "#about-uss", section: "About" },
  { id: 3, path: "#contact-us", section: "Contact" },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeCard />
      <div>
        <nav>
          {router.map((route) => (
            <Link href={route.path} key={route.id}>
              {route.section}
            </Link>
          ))}
        </nav>

        {router.map((route) => (
          <section
            className="h-screen"
            id={route.path.substring(1)}
            key={route.id}
          >
            <div className="p-10 bg-red-400">{route.section}</div>
          </section>
        ))}
      </div>
    </>
  );
}



*/
