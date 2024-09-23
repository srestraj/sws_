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

const UserGuideCard: React.FC<UserGuideCardProps> = ({ listing }) => {
  return (
    <div
      className="flex flex-row justify-between items-center max-w-screen"
      key={listing.titleNumber}
    >
      {/* Image component */}
      <div className="flex flex-col p-10 mx-40 max-w-sm min-w-60  sticky top-40">
        <div
          className={`sticky  bg-[url('/img/hero-pattern.svg')]  
          
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
      <div className="h-screen max-h-screen   sticky top-10 rounded-b-full rounded-t-full my-44  px-0.5  bg-gradient-to-b from-indigo-600 via-pink-600 to-purple-600 flex items-center justify-center">
        <div className=" -scroll-my-3.5  shadow-lg p-6 bg-meroColor-jet-black absolute rounded-full items-center flex justify-center">
          <div className="shadow-lg p-3    sticky top-96  rounded-full bg-meroColor-electric-indigo"></div>
        </div>
      </div>

      {/* Paragraphs area right */}
      <div className="flex flex-col p-10 mx-40 max-w-xl min-w-60 sticky top-72">
        <h1 className="text-meroColor-electric-indigo text-9xl font-extrabold py-3   min-w-44">
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
