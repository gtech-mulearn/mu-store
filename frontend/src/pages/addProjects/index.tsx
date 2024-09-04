import Preview from "./components/preview";
import styles from "./index.module.css";
import Info from "./components/info/info";
import { CiCircleInfo } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdRocket } from "react-icons/io";
import { useProjectStore } from "./hooks/useProjectStore";
import Media from "./components/media";
import Shoutout from "./components/shoutout";
import Creators from "./components/creators";
import { Checklist } from "./components/checklist";
import { motion, AnimatePresence } from "framer-motion";
import { InfoPreview } from "./components/infoPreview/infoPreview";
import { MediaPreview } from "./components/mediaPreview/mediaPreview";
import { CheckListPreview } from "./components/checkListPreview/checkListPreview";

export const AddProjects = () => {
  const { selectedOption, changeOption } = useProjectStore();

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

  const components: { [key: string]: JSX.Element } = {
    info: <Info />,
    media: <Media />,
    shoutout: <Shoutout />,
    creators: <Creators />,
    checklist: <Checklist />,
  };

  const previewComponents: { [key: string]: JSX.Element } = {
    info: <InfoPreview />,
    media: <MediaPreview />,
    shoutout: <Preview />,
    creators: <Preview />,
    checklist: <CheckListPreview />,
  };

  return (
    <div className={`p-10 min-h-screen w-full`}>
      <div
        className={`${styles.bgShadow} flex flex-col gap-12 p-12 h-full w-full rounded-3xl`}
      >
        <AnimatePresence>
          <div className="flex gap-60">{previewComponents[selectedOption]}</div>
        </AnimatePresence>
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
