import Navbar from "@/components/navbar";
import { BsDot, BsFillFlagFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { PiArrowFatUpLight } from "react-icons/pi";
import { RiShareFill } from "react-icons/ri";
import { Credits } from "./components/credits/credits";
import { DiscussionEmbed } from "disqus-react";
const ProductDetails = () => {
  const disqusConfig = {
    shortname: "mustore", // Replace with your Disqus shortname
    config: {
      url: window.location.href,
      identifier: "product-id", // Use a unique identifier for each product/page
      title: "Pixelated butterfly",
    },
  };
  const contributers = [
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
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-col justify-around pt-14 ">
        <div className="flex w-full justify-around">
          <div>
            <h1 className="font-jakarta text-3xl font-bold">
              Pixelated butterfly
            </h1>
            <p className="font-jakarta text-xl font-normal">
              Project that is pixelated
            </p>
            <span className="font-jakarta  font-bold text-[#132972] text-base">
              #tags
            </span>
          </div>
          <div className="flex gap-5 text-[#456FF6] items-center">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <p>
                  <PiArrowFatUpLight className=" text-3xl " />
                </p>
                <h3 className="font-bold font-poppins ">Upvote</h3>
              </div>
              <BsDot />

              <h3>269</h3>
            </div>
            <FiHeart className="text-3xl text-black" />
          </div>
        </div>
        <div className="flex justify-around w-full pt-4">
          <span></span>
          <div className="flex gap-5">
            <div className="border-[3px] border-[#0028A9] rounded-md p-1.5 shadow-lg">
              <RiShareFill className="text-xl" />
            </div>
            <div className="border-[3px] border-[#b1b1b1] rounded-md p-1.5 shadow-lg">
              <BsFillFlagFill className="text-xl fill-[#b1b1b1]" />
            </div>
          </div>
        </div>
        <div className="min-h-[400px] flex items-center justify-center border-2">
          IMAGE GRID AND DESCROPTION
        </div>
        <div className="w-full">
          <div className="flex justify-around w-full">
            <div className="font-jakarta font-bold text-3xl w-full">
              <div className="flex flex-col items-start pl-36 w-full">
                <div className="">Comments</div>

                <div className="w-3/4 pt-2">
                  <DiscussionEmbed {...disqusConfig} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full ">
              <Credits contributers={contributers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
