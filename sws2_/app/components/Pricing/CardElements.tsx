"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { Key } from "react";

interface IPriceItem {
  id: Key | null | undefined;
  heading: string;
  discriptions: string;
}

interface CardsElementsProps {
  pricingData: IPriceItem[];
}

export const CardsElements: React.FC<CardsElementsProps> = ({
  pricingData,
}) => {
  return (
    <div className="md:grid grid-cols-2 gap-10 items-center justify-center mx-auto">
      {pricingData.map((priceItem) => (
        <div className="flex justify-center flex-row w-4/5" key={priceItem.id}>
          <CheckCircleIcon className="w-8 h-8 me-1" />{" "}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl">{priceItem.heading}</h1>
            <p className="py-3 text-xl font-medium text-meroColor-platinum-10">
              {priceItem.discriptions}
            </p>
            <div className="border border-meroColor-platinum-10 w-full my-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
