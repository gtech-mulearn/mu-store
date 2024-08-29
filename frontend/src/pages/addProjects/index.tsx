import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Preview from "./components/preview";
import styles from "./index.module.css";
import Info from "./components/info/info";
import { CiCircleInfo } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdRocket } from "react-icons/io";
import Text from "./components/text";
import { useProjectStore } from "./hooks/useProjectStore";
import Media from "./components/media";
import Shoutout from "./components/shoutout";
import Creators from "./components/creators";
import { Checklist } from "./components/checklist";
import { usePreviewStore } from "./hooks/usePreviewStore";
import { motion, AnimatePresence } from "framer-motion";

export const AddProjects = () => {
  const { selectedOption, changeOption } = useProjectStore();
  const { changeDetails, details } = usePreviewStore();
  const { register, watch, setValue } = useForm({
    defaultValues: {
      title: "",
      tagline: "",
    },
  });

  const title = watch("title");
  const tagline = watch("tagline");

  useEffect(() => {
    if (title != "") {
      changeDetails({ ...details, title });
    }
    if (tagline != "") {
      let tags = tagline.split(",");
      tags = tags.map((tag) => "#" + tag.trim());
      changeDetails({ ...details, tags: tags.join(" ") });
    }
  }, [title, tagline]);

  const tabs = [
    {
      id: "info",
      name: "Key Info",
      icon: <CiCircleInfo />,
    },
    {
      id: "media",
      name: "Media",
      icon: <BsFiles />,
    },
    {
      id: "shoutout",
      name: "Shoutout",
      icon: <HiSpeakerphone />,
    },
    {
      id: "creators",
      name: "Creators",
      icon: <IoPeopleSharp />,
    },
    {
      id: "checklist",
      name: "Launch Checklist",
      icon: <IoMdRocket />,
    },
  ];

  const enterAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };
  const enterAnimationTop = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const components: { [key: string]: JSX.Element } = {
    info: <Info />,
    media: <Media />,
    shoutout: <Shoutout />,
    creators: <Creators />,
    checklist: <Checklist />,
  };

  return (
    <div className={`p-10 min-h-screen w-full`}>
      <div
        className={`${styles.bgShadow} flex flex-col gap-12 p-12 h-full w-full rounded-3xl`}
      >
        <div className="flex max-md:flex-col gap-32">
          <div className="w-4/6 flex flex-col gap-12">
            <motion.h2
              initial="initial"
              animate="animate"
              variants={enterAnimationTop}
              className="text-5xl font-semibold mb-6"
            >
              Tell us more about <br /> this
              <Text text="Project" />
            </motion.h2>
            <div>
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0, y: -20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                }}
                className={styles.labelContent}
              >
                <input
                  type="text"
                  placeholder="Project Title"
                  maxLength={20}
                  {...register("title")}
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabel}>Project Title*</label>
                <div
                  className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1`}
                >
                  {title.length}/20
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                animate={"animate"}
                variants={{
                  initial: { opacity: 0, y: -20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.3 },
                  },
                }}
                className={styles.labelContent}
              >
                <input
                  type="text"
                  placeholder="Tagline"
                  maxLength={60}
                  {...register("tagline")}
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabel}>Tagline*</label>
                <p
                  className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1`}
                >
                  {tagline.length}/60
                </p>
              </motion.div>
            </div>
          </div>
          <Preview />
        </div>
        <div className="flex items-center justify-center p-4">
          <motion.div
            initial="initial"
            animate={"animate"}
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
            className="flex rounded-full space-x-2 gap-1 p-3 border"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => changeOption(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  selectedOption === tab.id
                    ? "bg-blue-900 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </motion.div>
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedOption}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={enterAnimation}
            >
              {components[selectedOption]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
