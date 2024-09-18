("use clinet");

import { CheckIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { CardsElements } from "./CardElements";
import { ToggleButton } from "./ToggleButton";
import { PricingTopElement } from "./PricingTopElement";
const pricingData = [
  {
    id: 1,
    heading: "Expert Guidance",
    discriptions:
      "Access personalized advice and insights from financial professionals to optimize your financial strategy.",
  },
  {
    id: 2,
    heading: "Priority Support",
    discriptions:
      "Enjoy expedited customer support and assistance for any inquiries or technical issues.",
  },
  {
    id: 3,
    heading: "Advanced Analytics",
    discriptions:
      "In-depth financial analytics and reports for a holistic understanding of your financial health.",
  },
  {
    id: 4,
    heading: "Exclusive Webinars",
    discriptions:
      "Participate in exclusive webinars hosted by financial experts, offering valuable insights and strategies.",
  },
  {
    id: 5,
    heading: "Customized Learning Paths",
    discriptions:
      "Receive tailored educational content and resources to enhance your financial literacy and achieve your goals.",
  },
  {
    id: 6,
    heading: "Expense Tracking",
    discriptions:
      "Monitor spending habits effortlessly with PursePulse's intuitive and user-friendly expense tracking feature.",
  },
  {
    id: 7,
    heading: "Bill Reminders",
    discriptions:
      "Never miss a due date—receive timely notifications for upcoming bills and subscriptions.",
  },
  {
    id: 8,
    heading: "Goal Setting",
    discriptions:
      "Define and track financial aspirations, from saving for a vacation to planning for retirement.",
  },
  {
    id: 9,
    heading: "Basic Insights",
    discriptions:
      "Get fundamental insights into your financial habits and progress toward your goals.",
  },
];

const Pricing = () => {
  return (
    <>
      <div className=" bg-meroColor-jet-black text-meroColor-platinum-10 flex flex-col justify-center text-center   transition-all ease-in-out   ">
        <PricingTopElement />
        <div className="bg-meroColor-electric-indigo rounded-t-[35%] py-20 mx-10  items-center flex flex-col justify-center">
          <ToggleButton />
          <CardsElements pricingData={pricingData} />
        </div>
      </div>
    </>
  );
};

export default Pricing;
