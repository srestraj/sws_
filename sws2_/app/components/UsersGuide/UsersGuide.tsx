"use client";

import featureOne from "../../assets/featuresImgs/features1.svg";
import featureTwo from "../../assets/featuresImgs/feature2.svg";
import featureThree from "../../assets/featuresImgs/feature3.svg";
import featureFour from "../../assets/featuresImgs/feature4.svg";
import featureFive from "../../assets/featuresImgs/feature5.svg";

import DefaultLayout from "../DefaultLayout";
import UserGuideCard from "./UserGuideCard";

interface IListAnswer {
  id: number;
  listSlug: string;
}

interface GuideData {
  id: number;
  titleNumber: string;
  title: string;
  descriptions: string;
  question: string;
  listOfAnswer: IListAnswer[];
  images: string | any;
  pillbtn: boolean;
}

const UsersGuide = () => {
  const data: GuideData[] = [
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
      ],
      images: featureTwo,
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
      ],
      images: featureThree,
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
      images: featureFour,
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
      images: featureFive,
      pillbtn: false,
    },
  ];

  return (
    <>
      <DefaultLayout>
        <UserHeading />
        {data?.map((listing) => (
          <UserGuideCard key={listing.id} listing={listing} />
        ))}
      </DefaultLayout>
    </>
  );
};

export default UsersGuide;

const UserHeading = () => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-meroColor-white-10 text-7xl font-bold ">
          Start for
          <span className="text-meroColor-electric-indigo"> free</span>
        </h1>
        <p className="text-2xl py-10 items-center">
          No need to watch long-winded tutorials to get started with our app.
          Just follow these 5 steps and make your first transaction today.
        </p>
      </div>
    </>
  );
};
