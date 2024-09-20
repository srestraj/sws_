("use clinet");
import NavBar from "../components/NavBar";
import Pricing from "../components/Pricing/Pricing";

const PricingPage = () => {
  return (
    <>
      <div className=" bg-meroColor-jet-black text-meroColor-platinum-10 flex flex-col justify-center text-center transition-all ease-in-out ">
        <NavBar />
        <Pricing />
      </div>
    </>
  );
};

export default PricingPage;
