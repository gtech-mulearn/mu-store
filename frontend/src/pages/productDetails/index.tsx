import Navbar from "@/components/navbar";
import { BsDot, BsFillFlagFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { PiArrowFatUpLight } from "react-icons/pi";
import { RiShareFill } from "react-icons/ri";

const ProductDetails = () => {
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
        <div>IMAGE GRID</div>
      </div>
    </div>
  );
};

export default ProductDetails;
