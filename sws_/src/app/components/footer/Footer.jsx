import logo from "../../../assets/footerlogo.png";
import facebook from "../../../assets/facebook.svg";
import linkedin from "../../../assets/linkedin.svg";
import youtube from "../../../assets/youtube.svg";
import xtweeter from "../../../assets/xtweeter.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-light-green40 text-light-white20 mx-auto px-[200px] ">
      <div className=" h-[525px] flex-col relative">
        <div className="flex-row justify-between ">
          <div className="  font-inter flex justify-between items-end flex-col lg:flex-row">
            <NavLink to={"/"}>
              <div className="flex p-3 justify-center md:justify-between items-center flex-col lg:flex-row ">
                <img src={logo} className="h-10 " alt="footerlogo" />
                <p className="font-bold min-w-max  text-sm mx-3 tracking-wider  md:block hidden">
                  The International Association of Facial <br /> Growth Guidance
                  (Orthotropics®)
                </p>
                <p className="font-bold min-w-max  text-sm mx-3 tracking-wider block md:hidden p-1">
                  The International Association of Facial Growth Guidance
                  (Orthotropics®)
                </p>
              </div>
            </NavLink>
            <div className="flex p-2 font-semibold text-sm text-light-white20 ">
              <ul className="flex justify-center lg:justify-between items-center flex-col md:flex-row ">
                <li className="m-2">
                  <NavLink to={"discover"}>Discover</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"education"}>Education</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"science"}>Science</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"about-us"}>About the IAFGG</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"shop"}>Shop</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full font-normal text-sm text-light-white20  absolute bottom-10">
            <div className="flex justify-between items-end flex-col md:flex-row">
              <ul className="flex justify-between">
                <li className="m-2">
                  <NavLink to={"discover"}>Contact us</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"discover"}>Privacy notice</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"discover"}>Cookies</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"discover"}>Disclaimer</NavLink>
                </li>
              </ul>
              <div className="flex flex-col font-normal">
                <h1 className="me-10 order-2 tracking-wider font-inter">
                  © Orthotropics 1999 – 2024
                </h1>
                <div className="order-1">
                  <div className="flex">
                    <img className="m-1 h-10" src={facebook} alt="facebook_" />
                    <img className="m-1 h-10" src={xtweeter} alt="xtweeter_" />
                    <img className="m-1 h-10" src={youtube} alt="youtube_" />
                    <img className="m-1 h-10" src={linkedin} alt="linkedin_" />
                  </div>
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
