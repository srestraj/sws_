"use client";
import Image from "next/image";
import ButtonPills from "../ButtonPills";

interface AnswerItem {
  id: string | number;
  listSlug: string;
}

interface Listing {
  images: string;
  titleNumber: string | number;
  title: string;
  descriptions: string;
  question: string;
  listOfAnswer: AnswerItem[];
  pillbtn?: boolean;
}

interface UserGuideCardProps {
  listing: Listing;
  key?: string | number;
}

const UserGuideCard = ({ listing }: UserGuideCardProps) => {
  return (
    <div
      className="flex flex-row justify-between items-center"
      key={listing.titleNumber}
    >
      {/* Image component */}
      <div className="flex flex-col mx-40 max-w-sm min-w-60  transition-all ease-in-out  sticky top-40 bg-[url('/img/hero-pattern.svg')]  ">
        <div
          className={` bg-[url('/img/hero-pattern.svg')]  
           scale-75
          ${listing.images ? listing.images : ""}
          `}
        >
          <Image
            src={listing.images}
            height={400}
            width={400}
            alt="featureOne_"
          />
        </div>
      </div>

      {/* Center line item */}
      <div className="sticky top-10 transition-all ease-in-out  h-screen rounded-b-full rounded-t-full px-0.5  bg-gradient-to-b from-indigo-600 via-pink-600 to-purple-600 flex items-center justify-center">
        <div className="sticky top-60  ">
          <div className=" shadow-lg p-6 bg-meroColor-jet-black absolute rounded-full items-center flex justify-center">
            <div className="shadow-lg p-3  rounded-full bg-meroColor-electric-indigo"></div>
          </div>
        </div>
      </div>

      {/* Paragraphs area right */}
      <div className="sticky top-10 transition-all ease-in-out scale-50 flex flex-col mx-40 max-w-xl min-w-60 ">
        <h1 className="text-meroColor-electric-indigo text-9xl font-extrabold py-3 min-w-44">
          {listing.titleNumber}
        </h1>
        <h2 className="text-4xl text-meroColor-white-10 py-1 ">
          {listing.title}
        </h2>
        <p className="text-2xl max-w-xl py-2">{listing.descriptions}</p>
        <h2 className="text-4xl text-meroColor-white-10 py-5">
          {listing.question}
        </h2>
        <ul className="py-3 text-2xl">
          {listing.listOfAnswer.map((answersItems) => (
            <li className="py-1 list-none" key={answersItems.id}>
              {answersItems.listSlug}
            </li>
          ))}
          <div className="mt-10">
            {listing.pillbtn && (
              <ButtonPills
                btnName="Start free trial"
                hoverColor="hover:ring-meroColor-light-grey"
                ringColor="gray"
                textColor="gray"
                hoverTextColor=""
              />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserGuideCard;
