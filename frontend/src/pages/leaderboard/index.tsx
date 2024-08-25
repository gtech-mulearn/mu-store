import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Card from "./components/card";

import Top from "./components/top";

type TimeRange = "All Time" | "monthly";

interface Item {
  name: string;
  upvote: number;
  image: string;
  rank: number;
}

const Leaderboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("monthly");
  const items: Item[] = [
    {
      name: "Awesome product!",
      upvote: 123,
      image: "https://via.placeholder.com/100",
      rank: 1,
    },
    {
      name: "AMAZING THINGS!",
      upvote: 456,
      image: "https://via.placeholder.com/100",
      rank: 2,
    },
    {
      name: "NOT THE BEST THOUGH",
      upvote: 789,
      image: "https://via.placeholder.com/100",
      rank: 3,
    },
  ];
  // Function to get the button classes based on the active timeRange
  const buttonClasses = (type: TimeRange) =>
    `rounded-md cursor-pointer px-8 py-2 rounded-2xl   ${
      timeRange === type
        ? "bg-[#9087E5] text-white"
        : "transparent text-gray-300"
    }`;

  return (
    <div className="bg-[#6A5AE0] h-screen flex flex-col ">
      <div className="font-jakarta flex p-5 gap-5 items-center justify-start text-xl font-semibold text-white">
        <IoMdArrowRoundBack />
        Leaderboard
      </div>
      <div className="flex gap-2 p-4 font-jakarta  font-semibold text-sm justify-center">
        <span
          className={buttonClasses("monthly")}
          onClick={() => setTimeRange("monthly")}
        >
          Monthly
        </span>
        <span
          className={buttonClasses("All Time")}
          onClick={() => setTimeRange("All Time")}
        >
          All Time
        </span>
      </div>
      <div className="flex items-center justify-center p-5">
        <Card />
      </div>
      <div className="p-4">
        <Top items={items} />
      </div>
      <div className="p-4">list</div>
    </div>
  );
};

export default Leaderboard;
