("use clinet");
import Images from "next/image";
import NavBar from "../components/NavBar";
import ButtonPills from "../components/ButtonPills";
import homeImage from "../assets/homeimage.png";
import HomeCard from "../components/Home/HomeCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeCard />
    </>
  );
}
