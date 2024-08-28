import { PiArrowFatUpThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const Preview = () => {
  return (
    <div className="flex flex-col gap-3 text-xs text-center font-light text-[#727272] tracking-tight">
      <p>This is how your project appears to viewer's </p>
      <div
        style={{
          boxShadow: "4px 4px 0px #484848",
        }}
        className="max-w-xs mx-auto bg-white rounded-xl border-4 border-[#484848] overflow-hidden w-64"
      >
        <div className="p-4">
          <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg">
            <FiUpload className="text-6xl text-black" />
            <span className="absolute -bottom-5 left-0 bg-[#D9CFCF] text-gray-900 text-sm px-3 py-1 rounded-full shadow-md">
              Project Name
            </span>
          </div>

          <div className="mt-8">
            <p className="text-[0.8rem] text-left text-gray-500">#Theme</p>
            <p className="mt-1 text-left text-gray-500 text-base font-medium text-wrap">
              It's basically a sentence on the project.
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="text-blue-600 text-sm flex items-center">
              <PiArrowFatUpThin className="text-xl" />
              Upvote · 0
            </button>

            <button className="text-gray-400">
              <FaRegHeart className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
