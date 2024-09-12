import React from "react";
import NavBarTabs from "../Nav/NavBarTabs";
import logo from "../../assets/footerlogo.png";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import xtweeter from "../../assets/xtweeter.svg";

const Footer = () => {
  return (
    <div className="bg-[#223844] text-[white] h-[525px] flex-col relative">
      <div className="flex-row justify-between">
        <div className="flex font-inter justify-between">
          <div className="flex p-3">
            <img src={logo} className="h-10 " alt="footerlogo" />
            <span className="font-bold tracking-tighter text-sm mx-3">
              The International Association of Facial <br /> Growth Guidance
              (Orthotropics®)
            </span>
          </div>
          <div className="flex p-2 font-semibold text-sm text-[white]">
            <ul className="flex ">
              <li className="m-2">
                <a href="">Discover</a>
              </li>
              <li className="m-2">
                <a href="">Education</a>
              </li>
              <li className="m-2">
                <a href="">Science</a>
              </li>
              <li className="m-2">
                <a href="">About the IAFGG</a>
              </li>
              <li className="m-2">
                <a href="">Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full font-normal text-sm text-[white]  absolute bottom-10">
          <div className="justify-between flex items-end ">
            <ul className="flex justify-between">
              <li className="m-2">
                <a href="">Contact us</a>
              </li>
              <li className="m-2">
                <a href="">Privacy notice</a>
              </li>
              <li className="m-2">
                <a href="">Cookies</a>
              </li>
              <li className="m-2">
                <a href="">Disclaimer</a>
              </li>
            </ul>
            <div className="flex flex-col font-normal">
              <h1 className="me-10 order-2 tracking-wider font-inter">
                © Orthotropics 1999 – 2024
              </h1>
              <div className="order-1">
                <div className="flex">
                  <img className="m-1 h-10" src={facebook} alt="" />
                  <img className="m-1 h-10" src={xtweeter} alt="" />
                  <img className="m-1 h-10" src={youtube} alt="" />
                  <img className="m-1 h-10" src={linkedin} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* 

    */
