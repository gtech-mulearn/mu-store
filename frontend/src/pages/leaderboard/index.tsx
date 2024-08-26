import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Contributers } from "./components/contributers";
import Top from "./components/top";

import circle from "./assets/svg/circles.svg";
import profileAvatar from "./components/top/assets/svg/profile-temp.svg";

export const Leaderboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState(0);
  const items: Item[] = [
    {
      name: "Awesome product!",
      upvote: 123,
      image: "https://via.placeholder.com/100",
      rank: 1,
      description: "This is a description",
      owner: "Budhiman123",
      contributers: [
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
      ],
    },
    {
      name: "AMAZING THINGS!",
      upvote: 456,
      image: "https://via.placeholder.com/100",
      rank: 2,
      description: "This is a description",
      owner: "Budhiman123",
      contributers: [
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
      ],
    },
    {
      name: "NOT THE BEST THOUGH",
      upvote: 789,
      image: "https://via.placeholder.com/100",
      rank: 3,
      description: "This is a description",
      owner: "Budhiman123",
      contributers: [
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
      ],
    },
    //create 3 more such items
    {
      name: "GREAT STUFF",
      upvote: 987,
      image: "https://via.placeholder.com/100",
      rank: 4,
      description: "This is a description",
      owner: "Budhiman123",
      contributers: [
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
      ],
    },
    {
      name: "AWESOME PRODUCT",
      upvote: 654,
      image: "https://via.placeholder.com/100",
      rank: 5,
      description: "This is a description",
      owner: "Budhiman123",
      contributers: [
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
      ],
    },
    {
      name: "COOL THINGS",
      upvote: 321,
      image: "https://via.placeholder.com/100",
      rank: 6,
      description: "This is a description",
      owner: "Budhiman123",
      contributers: [
        {
          muid: "geevarghese@mulearn",
          image:
            "https://mulearn.org/muback-media/user/profile/8bafab61-8f13-4c67-9509-52f472a16a4b.png?468.3652169774042",
        },
      ],
    },
  ];
  const sortedItems = [...items].sort((a, b) => a.rank - b.rank);
  // Function to get the button classes based on the active timeRange
  const buttonClasses = (type: number) =>
    `rounded-md cursor-pointer px-8 py-2 rounded-2xl    ${
      timeRange === type
        ? "bg-[#9087E5] text-white"
        : "transparent text-gray-300 "
    }`;

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <div className="absolute h-[94vh] w-full  bg-[#132972] "></div>
      <div className="font-jakarta flex p-5 gap-5 items-center justify-start text-xl font-semibold  text-white z-10">
        <IoMdArrowRoundBack />
        Leaderboard
      </div>

      <div className="flex gap-2 p-4 font-jakarta  font-semibold text-sm justify-center z-10">
        <span className={buttonClasses(0)} onClick={() => setTimeRange(0)}>
          Monthly
        </span>
        <span className={buttonClasses(1)} onClick={() => setTimeRange(1)}>
          All Time
        </span>
      </div>
      <div className="flex items-center justify-center p-5"></div>
      <div className="p-4 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <img
            src={circle}
            alt="circle"
            className="absolute inset-0 z-0 opacity-70 w-full h-full object-contain -translate-y-20"
          />
          <div className="relative z-10">
            <Top items={items} />
          </div>
        </div>
      </div>

      <div className="w-full px-5 flex justify-center -translate-y-10 z-10">
        <div className="bg-[#256acb] p-3 rounded-lg flex flex-col gap-3 max-w-[1200px] w-full  ">
          <div className="flex justify-between px-4 font-jakarta font-semibold text-white text-sm">
            <div className="flex gap-10">
              <div>Rank</div>
              <div>Product</div>
            </div>
            <div className="flex gap-44">
              <div>Collaborators</div>
              <div>UpVotes</div>
            </div>
          </div>
          {sortedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white font-jakarta w-full p-4  text-xl rounded-lg "
            >
              <div className="text-black font-semibold w-10 text-center items-center justify-center ">
                {item.rank}
              </div>
              <img
                src={profileAvatar}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-grow text-black font-semibold">
                {item.name}
              </div>
              <div className="flex gap-52">
                <div className="flex justify-center">
                  <Contributers contributers={item.contributers} />
                </div>

                <h1 className="text-gray-500 text-lg">{item.upvote}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
