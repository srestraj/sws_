("use clinet");
import Image from "next/image";
import ButtonPills from "../ButtonPills";

const UserGuideCard = ({ listing }) => {


    
  return (
    <>
      <div
        className="flex flex-row justify-around items-center max-w-screen-2xl mx-auto "
        key={listing.id}
      >
        {/* image component */}
        <div className="p-20">
          <Image
            src={listing.images}
            height={300}
            width={300}
            className="scale-40"
            alt="featureOne_"
          />
        </div>

        {/* center line item */}

        <div className="h-screen rounded-b-full rounded-t-full mx-44 bg-gradient-to-b from-indigo-600 via-pink-600 to-purple-600 px-0.5 flex items-center justify-center">
          <div className=" shadow-lg p-6 bg-meroColor-jet-black absolute rounded-full  items-center flex justify-center ">
            <div className=" shadow-lg p-3 absolute rounded-full bg-meroColor-electric-indigo "></div>
          </div>
        </div>

        {/*   paragraphs area right  */}

        <div className="flex flex-col p-10">
          <h1 className="text-meroColor-electric-indigo text-9xl font-extrabold py-3">
            {listing.titleNumber}
          </h1>
          <h2 className="text-4xl text-meroColor-white-10 py-1">
            {listing.title}
          </h2>
          <p className=" text-2xl max-w-xl py-2">{listing.descriptions}</p>
          <h2 className="text-4xl text-meroColor-white-10 py-5">
            {listing.question}
          </h2>
          <ul className="py-3 text-2xl  ">
            {listing.listOfAnswer.map((answersItems) => (
              <li className="py-1 list-none" key={answersItems.id}>
                {answersItems.listSlug}
              </li>
            ))}
            <div className="mt-10">
              {listing.pillbtn && (
                <ButtonPills
                  btnName="Start free trail"
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
    </>
  );
};

export default UserGuideCard;
