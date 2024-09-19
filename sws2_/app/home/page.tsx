("use clinet");
import NavBar from "../components/NavBar";
import { BacktoTop } from "../components/backtotop/BacktoTop";
import HomeCard from "../components/Home/HomeCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeCard />

      <BacktoTop />
    </>
  );
}
