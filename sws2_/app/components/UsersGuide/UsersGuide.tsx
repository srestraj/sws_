("use clinet");
import Image from "next/image";
import ButtonPills from "../ButtonPills";
import featureOne from "../../assets/featureOne.svg";
import UserGuideCard from "./UserGuideCard";

const UsersGuide = () => {
  const data = [
    {
      id: 1,
      titleNumber: "01",
      title: "Sign up",
      descriptions:
        "Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "An active email address" },
        { id: 2, listSlug: "A strong, unique password" },
        { id: 3, listSlug: "60 seconds to complete registration" },
        // { id: 4, listSlug: "An active email address" },
      ],
      images: featureOne,
      pillbtn: true,
    },

    {
      id: 2,
      titleNumber: "02",
      title: "What you'll need",
      descriptions:
        "Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "An active email address" },
        { id: 2, listSlug: "A strong, unique password" },
        { id: 3, listSlug: "60 seconds to complete registration" },
        // { id: 4, listSlug: "An active email address" },
      ],
      images: featureOne,
      pillbtn: false,
    },

    {
      id: 3,
      titleNumber: "03",
      title: "Connect your accounts",
      descriptions:
        "Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "An active email address" },
        { id: 2, listSlug: "A strong, unique password" },
        { id: 3, listSlug: "60 seconds to complete registration" },
        // { id: 4, listSlug: "An active email address" },
      ],
      images: featureOne,
      pillbtn: false,
    },

    {
      id: 4,
      titleNumber: "04",
      title: "Personalize your budget",
      descriptions:
        "Tailor your budget based on your income, expenses, and financial goals for a personalized and effective financial plan.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "Knowledge of your monthly income" },
        { id: 2, listSlug: "An understanding of your regular expenses" },
        {
          id: 3,
          listSlug:
            "Specific financial goals to tailor your budget effectively",
        },
      ],
      images: featureOne,
      pillbtn: false,
    },

    {
      id: 5,
      titleNumber: "05",
      title: "Explore all features",
      descriptions:
        "Dive into all of PursePulse's features to maximize your financial potential.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "Curiosity to discover PursePulse features" },
        {
          id: 2,
          listSlug: "A willingness to explore and try out different tools",
        },
        {
          id: 3,
          listSlug:
            "Some time to navigate and get acquainted with the app's functionalities",
        },
      ],
      images: featureOne,

      pillbtn: false,
    },
  ];

  return (
    <>
      <div className="bg-meroColor-jet-black text-meroColor-light-grey py-10">
        <div className="flex  items-center justify-evenly flex-col  transition-all ease-in-out  ">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-meroColor-white-10 text-7xl font-bold">
              Start for
              <span className="text-meroColor-electric-indigo"> free</span>
            </h1>
            <p className="text-2xl py-10 items-center">
              {
                "No need to watch long-winded tutorials to get started with our app. Just follow these 5 steps and make your first transaction today"
              }
            </p>
          </div>

          {data?.map((listing) => (
            <UserGuideCard listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersGuide;
