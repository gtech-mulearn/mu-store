import React from "react";

import first from "./assets/svg/first.svg";
import second from "./assets/svg/second.svg";
import third from "./assets/svg/third.svg";
import profile from "./assets/svg/profile-temp.svg";

interface Item {
  name: string;
  upvote: number;
  image: string;
  rank: number;
}

interface TopProps {
  items: Item[];
}

const Podium: React.FC<TopProps> = ({ items }) => {
  // Sort items by rank (ascending)
  const sortedItems = [...items].sort((a, b) => a.rank - b.rank);

  return (
    <div className="flex items-end justify-center font-jakarta">
      <div className="flex flex-col items-center justify-center">
        <img src={profile} />
        <div className="text-white font-semibold">{sortedItems[1].name}</div>
        <h1 className="text-gray-300 text-lg">{sortedItems[1].upvote}</h1>
        <img src={second} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={profile} />
        <div className="text-white font-semibold">{sortedItems[0].name}</div>
        <h1 className="text-gray-300 text-lg">{sortedItems[0].upvote}</h1>
        <img src={first} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={profile} />
        <div className="text-white font-semibold">{sortedItems[2].name}</div>
        <h1 className="text-gray-300 text-lg">{sortedItems[2].upvote}</h1>
        <img src={third} />
      </div>
    </div>
  );
};

export default Podium;
