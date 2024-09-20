import React from "react";

const Home = () => {
  return <div>Home Page</div>;
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