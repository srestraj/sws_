"use client";

import ButtonPills from "../components/ButtonPills";
import logoImg from "../assets/logo.webp";
import Images from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
 
 
const NavBar = ({router}) => {
  return (
    <>
      <nav className="bg-meroColor-platinum-10 ">
        <div className=" items-center justify-between flex mx-auto max-w-screen-2xl px-20 lg:px-32 z-20 py-1">
          <Link href={"/"}>
            <Images src={logoImg} width={160} alt="logo_" />
          </Link>
          <ul className="lg:flex py-3 items-center justify-evenly hidden ">
            {router?.map((linksLists) => (
              <Link href={linksLists.path} key={linksLists.id}>
                <li className="text-meroColor-dark-gray  text-wrap  text-sm px-1  last:me-5 hover:text-meroColor-electric-indigo">
                  {linksLists.section}
                </li>
              </Link>
            ))}
            <ButtonPills
              btnName="Start free trial"
              hoverColor="hover:ring-meroColor-electric-indigo"
              ringColor=""
              textColor=""
              hoverTextColor="hover:text-meroColor-electric-indigo"
            />
          </ul>

          <div className="lg:hidden">
            <Bars3Icon className="size-6 text-meroColor-electric-indigo" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
