import { useEffect, useState } from "react";
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

export const AddProjects = () => {
  const [activeTab, setActiveTab] = useState<string>();
  const { selectedOption, changeOption } = useProjectStore();
  const [title, setTitle] = useState<string>("");
  const [tagline, setTagline] = useState<string>("");
  useEffect(() => {
    console.log(selectedOption);
  }, []);

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
  return (
    <div className={`p-10  min-h-screen w-full`}>
      <div
        className={`${styles.bgShadow} flex flex-col gap-12 p-12 h-full w-full rounded-3xl`}
      >
        <div className="flex max-md:flex-col gap-32">
          <div className="w-4/6 flex flex-col gap-12">
            <h2 className="text-5xl font-semibold mb-6">
              Tell us more about <br /> this
              <Text text="Project" />
            </h2>
            <div>
              <div className={styles.labelContent}>
                <input
                  type="text"
                  placeholder="Project Title"
                  maxLength={20}
                  value={title} // Updated
                  onChange={(e) => setTitle(e.target.value)} // Updated
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabel}>Project Title*</label>
                <div
                  className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1 `}
                >
                  {title.length}/20
                </div>
              </div>

              <div className={styles.labelContent}>
                <input
                  type="text"
                  placeholder="Tagline"
                  maxLength={60}
                  value={tagline} // Updated
                  onChange={(e) => setTagline(e.target.value)} // Updated
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabel}>Tagline*</label>
                <p
                  className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1 `}
                >
                  {tagline.length}/60
                </p>
              </div>
            </div>
          </div>
          <Preview />
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="flex bg-white rounded-full space-x-2 gap-1 p-3 border">
            {tabs.map((tab) => (
              <button
                key={tab.name}
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
          </div>
        </div>
        <div>
          {
            {
              info: <Info />,
              media: <Media />,
              shoutout: <Shoutout />,
              creators: <Creators />,
              checklist: <Checklist />,
            }[selectedOption]
          }
        </div>
      </div>
    </div>
  );
};
