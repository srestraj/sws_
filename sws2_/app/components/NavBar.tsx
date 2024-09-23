"use client";

import ButtonPills from "../components/ButtonPills";
import logoImg from "../assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Route } from "../router.ts";
import { router } from "../router.ts";
import { useState } from "react";

interface NavBarProps {
  router: Route[];  
}

const NavBar = ({ router }: NavBarProps) => {
  const [isClick, setIsClisk] = useState(true);

  return (
    <>
      <nav className="max-w-screen-2xl  mx-auto ">
        <div className="rounded-b-[37%] md:rounded-none transition-all ease-in-out w-full md:p-10 max-w-screen-2xl  bg-meroColor-platinum-10 items-center flex flex-col md:flex-row  justify-center md:justify-between ">
          <Link href={"/"}>
            <Image src={logoImg} width={160} alt="logo_" />
          </Link>
          <ul className="md:flex py-3 items-center justify-between">
            {router?.map((linksList) => (
              <Link href={linksList.path} key={linksList.id}>
                <li className="text-meroColor-dark-gray text-wrap text-sm px-1 last:me-5 hover:text-meroColor-electric-indigo text-center">
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
            <Bars3Icon
              onClick={() => setIsClisk(!isClick)}
              className="h-6 w-t-meroColor-el6 texectric-indigo"
            />{" "}
            {/* Corrected size class */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
