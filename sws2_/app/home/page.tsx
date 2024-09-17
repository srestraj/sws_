("use clinet");
import Images from "next/image";
import NavBar from "../components/NavBar";
import ButtonPills from "../components/ButtonPills";
import homeImage from "../assets/homeimage.png";
import BodyCard from "../components/Body/BodyCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <BodyCard />
    </>
  );
}
