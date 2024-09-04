import Text from "../text";
import { motion } from "framer-motion";

export const CheckListPreview = () => {
  const enterAnimationTop = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <motion.h2
        initial="initial"
        animate="animate"
        variants={enterAnimationTop}
        className="text-5xl font-semibold mb-6"
      >
        Almost there. One <br /> final <Text text="step" />
      </motion.h2>
    </div>
  );
};
