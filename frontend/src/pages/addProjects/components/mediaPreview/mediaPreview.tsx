import Text from "../text";
import { motion } from "framer-motion";
import image_placeholder from "/projects/image_placeholder.svg";

export const MediaPreview = () => {
  const enterAnimationTop = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="w-full">
      <motion.h2
        initial="initial"
        animate="animate"
        variants={enterAnimationTop}
        className="text-5xl font-semibold mb-6"
      >
        Tell us more about <br /> this
        <Text text="Project" />
      </motion.h2>
      <div className="w-full p-5">
        <p className="text-center text-gray-500 mb-4 py-4">
          This is how your project appears to viewer's
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="col-span-2">
            <img className="object-cover" src={image_placeholder} alt="" />
          </div>
          <div className="col-span-2 grid grid-rows-2 gap-4">
            <img className="" src={image_placeholder} alt="" />
            <div className="grid grid-cols-2 gap-4">
              <img className="" src={image_placeholder} alt="" />
              <img className="" src={image_placeholder} alt="" />
            </div>
          </div>
          <div>
            <img className="" src={image_placeholder} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
