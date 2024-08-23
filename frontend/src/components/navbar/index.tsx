import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isopen, setisopen] = useState(false);
  return (
    <nav className="bg-white py-2 px-6 border-b-[1px] border-gray-300 w-full overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src='/images/logo.png' alt="mustore" className="h-14" />
        </div>

        <div className="flex space-x-8 text-gray-700 max-md:hidden">
          <a href="#" className="hover:text-black hover:underline">
            Products
          </a>
          <a href="#" className="hover:text-black hover:underline">
            Leaderboard
          </a>
          <a href="#" className="hover:text-black hover:underline">
            About
          </a>
          <a href="#" className="hover:text-black hover:underline">
            Community
          </a>
        </div>

        <div className="flex space-x-4">
          <button className="bg-[#13297277] text-[#132972] py-2 px-4 rounded-full">
            signup
          </button>
          <button className="bg-[#132972] text-white py-2 px-4 rounded-full">
            Sign in
          </button>
          <button
            onClick={() => {
              setisopen(true);
            }}
            className="md:hidden"
          >
            <RxHamburgerMenu className="text-xl" />
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isopen ? 0 : "100%" }}
        className="h-screen w-screen bg-black absolute top-0 right-0"
      >
        <div className="flex flex-col text-white p-6 text-3xl gap-5">
          <div className="flex justify-end w-full">
            <IoClose
              onClick={() => {
                setisopen(false);
              }}
              className="text-white text-6xl"
            />
          </div>
          <a href="#" className="hover:text-black hover:underline">
            Launches
          </a>
          <a href="#" className="hover:text-black hover:underline">
            Products
          </a>
          <a href="#" className="hover:text-black hover:underline">
            News
          </a>
          <a href="#" className="hover:text-black hover:underline">
            Community
          </a>
          <a href="#" className="hover:text-black hover:underline">
            Advertise
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
