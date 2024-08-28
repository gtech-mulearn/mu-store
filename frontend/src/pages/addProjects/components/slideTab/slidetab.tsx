import React, { useRef } from "react";
import { motion } from "framer-motion";

interface TabType {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface SlideTabsProps {
  tabs: TabType[];
  selectedOption: number;
  changeOption: (id: number) => void;
}

interface PositionType {
  left: number;
  width: number;
  opacity: number;
}

const SlideTabs: React.FC<SlideTabsProps> = ({
  tabs,
  selectedOption,
  changeOption,
}) => {
  const [position, setPosition] = React.useState<PositionType>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative flex bg-white rounded-full space-x-2 gap-1 p-3 border">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            selectedOption={selectedOption}
            changeOption={changeOption}
            setPosition={setPosition}
          />
        ))}
        <Cursor position={position} />
      </div>
    </div>
  );
};

interface TabProps {
  tab: TabType;
  selectedOption: number;
  changeOption: (id: number) => void;
  setPosition: React.Dispatch<React.SetStateAction<PositionType>>;
}

const Tab: React.FC<TabProps> = ({
  tab,
  selectedOption,
  changeOption,
  setPosition,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      onClick={() => changeOption(tab.id)}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 flex items-center px-4 py-2 rounded-full text-sm font-medium ${
        selectedOption === tab.id
          ? "bg-blue-900 text-white"
          : "bg-white text-gray-700 border border-gray-300"
      }`}
    >
      <span className="mr-2">{tab.icon}</span>
      {tab.name}
    </button>
  );
};

interface CursorProps {
  position: PositionType;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 h-10 bg-blue-900 rounded-full"
      style={{ top: -8 }} // Adjust the top position as needed
    />
  );
};

export default SlideTabs;
