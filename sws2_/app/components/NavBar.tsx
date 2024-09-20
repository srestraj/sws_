"use client";

import ButtonPills from "../components/ButtonPills";
import logoImg from "../assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Route } from "../router.ts";
import { router } from "../router.ts";

interface NavBarProps {
  router: Route[]; // Define router prop type
}

const NavBar = ({ router }: NavBarProps) => {
  return (
    <>
      <nav className="bg-meroColor-platinum-10">
        <div className="flex items-center justify-between mx-auto max-w-screen-2xl px-20 lg:px-32 z-20 py-1">
          <Link href={"/"}>
            <Image src={logoImg} width={160} alt="logo_" />{" "}
            {/* Corrected Image component */}
          </Link>
          <ul className="lg:flex py-3 items-center justify-evenly hidden">
            {router?.map((linksList) => (
              <Link href={linksList.path} key={linksList.id}>
                <li className="text-meroColor-dark-gray text-wrap text-sm px-1 last:me-5 hover:text-meroColor-electric-indigo">
                  {linksList.section}
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
            <Bars3Icon className="h-6 w-6 text-meroColor-electric-indigo" />{" "}
            {/* Corrected size class */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
