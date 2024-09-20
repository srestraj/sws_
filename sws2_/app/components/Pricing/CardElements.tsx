"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Key } from "react";

interface PriceItem {
  id: Key | null | undefined;
  heading: string;
  discriptions: string;
}

interface CardsElementsProps {
  pricingData: PriceItem[];
}

export const CardsElements = ({ pricingData }: CardsElementsProps) => {
  return (
    <div className="grid grid-cols-2 gap-10 p-28  items-center justify-center mx-auto scale-75">
      {pricingData.map((priceItem) => (
        <div
          className="flex text-start justify-center  w-4/5"
          key={priceItem.id}
        >
          <CheckCircleIcon className="size-8 me-1" />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl">{priceItem.heading}</h1>
            <p className="py-3 text-xl font-medium text-meroColor-platinum-10 ">
              {priceItem.discriptions}
            </p>
            <div className="border border-meroColor-platinum-10 w-full my-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
