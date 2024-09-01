import React from "react";

import first from "./assets/svg/first.svg";
import second from "./assets/svg/second.svg";
import third from "./assets/svg/third.svg";
import profile from "./assets/svg/profile-temp.svg";
import crown from "./assets/svg/crown.svg";
interface Item {
  name: string;
  upvote: number;
  image: string;
  rank: number;
  description: string;
}

interface TopProps {
  items: Item[];
}

const Podium: React.FC<TopProps> = ({ items }) => {
  // Sort items by rank (ascending)
  const sortedItems = [...items].sort((a, b) => a.rank - b.rank);

  return (
    <div className="flex flex-col items-center justify-center font-jakarta">
      <div className="flex items-end justify-center font-jakarta">
        <div className="flex flex-col items-center justify-center text-xs md:text-base">
          <img src={profile} className="max-w-12 md:max-w-48 " />
          <div className="text-white font-semibold text-center pt-4">
            {sortedItems[1].name}
          </div>
          <h1 className="text-gray-300 text-sm lg:text-lg text-center pt-2">
            {sortedItems[1].upvote}
          </h1>

          <div className="relative inline-block">
            <img src={second} className="block" />
            <div className="absolute inset-0 flex justify-center items-center text-white font-jakarta font-bold text-[6rem]">
              2
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-xs md:text-base">
          <div className="relative">
            <img src={profile} className="max-w-12 md:max-w-48 relative" />
            <img
              src={crown}
              className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="text-white font-semibold pt-4">
            {sortedItems[0].name}
          </div>
          <h1 className="text-gray-300 text-sm lg:text-lg text-center pt-2">
            {sortedItems[0].upvote}
          </h1>
          <div className="relative inline-block">
            <img src={first} className="block" />
            <div className="absolute inset-0 flex justify-center items-center text-white font-jakarta font-bold text-[7rem]">
              1
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-xs md:text-base ">
          <img src={profile} className="max-w-12 md:max-w-48" />
          <div className="text-white font-semibold pt-4 text-center">
            {sortedItems[2].name}
          </div>
          <h1 className="text-gray-300 text-sm lg:text-lg text-center pt-2">
            {sortedItems[2].upvote}
          </h1>
          <div className="relative inline-block">
            <img src={third} className="block" />
            <div className="absolute inset-0 flex justify-center items-center text-white font-jakarta font-bold text-[5rem]">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podium;
