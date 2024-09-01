import { FaPlus } from "react-icons/fa6";

type Props = {
  contributers: {
    muid: string;
    image: string;
  }[];
};

export const Contributers = ({ contributers }: Props) => {
  return (
    <div
      className={`flex items-center translate-x-${contributers.length}`}
      style={{
        transform:
          contributers.length > 4
            ? `translateX(${contributers.length + 10}px)`
            : ``,
      }}
    >
      <div>
        <img
          src={contributers[0].image}
          alt=""
          className="rounded-full max-w-10 border-2 border-white"
        />
      </div>
      {contributers[1]?.muid && (
        <div className="-translate-x-1">
          <img
            src={contributers[1].image}
            alt=""
            className="rounded-full max-w-10 border-2 border-white"
          />
        </div>
      )}
      {contributers[2]?.muid && (
        <div className="-translate-x-2">
          <img
            src={contributers[2].image}
            alt=""
            className="rounded-full max-w-10 border-2 border-white"
          />
        </div>
      )}
      {contributers[3]?.muid &&
        (contributers.length !== 4 ? (
          <div className="-translate-x-3 font-jakarta font-bold rounded-full bg-[#eaf3ff] w-10 h-10  flex justify-center items-center ">
            <FaPlus className="text-sm text-center" />
            <span className="text-md">{contributers.length - 3}</span>
          </div>
        ) : (
          <div className="-translate-x-3">
            <img
              src={contributers[2].image}
              alt=""
              className="rounded-full max-w-10 border-2 border-white"
            />
          </div>
        ))}
    </div>
  );
};
