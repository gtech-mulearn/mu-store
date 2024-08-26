import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "./components/navItems";

function Navbar() {
  const [isopen, setisopen] = useState(false);
  return (
    <nav className="bg-white py-2 px-6 border-b-[1px] border-gray-300 w-full overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="mustore" className="h-14" />
        </div>

        <div className="flex space-x-8 text-gray-700 max-md:hidden">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={
                item.path === "/community" ? "https://mulearn.org/" : item.path
              }
              target={item.path === "/community" ? "_blank" : "_self"}
              rel={
                item.path === "/community" ? "noopener noreferrer" : undefined
              }
              className="hover:text-black hover:underline"
            >
              {item.name}
            </a>
          ))}
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
          {navItems.map((item) => (
            <a
              key={item.path}
              href={
                item.path === "/community" ? "https://mulearn.org/" : item.path
              }
              target={item.path === "/community" ? "_blank" : "_self"}
              rel={
                item.path === "/community" ? "noopener noreferrer" : undefined
              }
              className="hover:text-black hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
