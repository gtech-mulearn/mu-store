import { FaPlus } from "react-icons/fa6";
import contributersBackground from "./../../../../../public/images/poductDetails/contributers.svg";

type Props = {
  contributers: {
    muid: string;
    image: string;
  }[];
};

export const Credits = ({ contributers }: Props) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${contributersBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="p-20">
        <div className="font-bold font-jakarta flex flex-col items-center justify-center z-10 ">
          <p>
            We <span className="text-[#132972]">Owe</span> this
          </p>{" "}
          project to all those who contributed
        </div>
        <div
          className={`flex items-center translate-x-${contributers.length} z-10`}
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
              className="rounded-full max-w-16 border-2 border-white"
            />
          </div>
          {contributers[1]?.muid && (
            <div className="-translate-x-3">
              <img
                src={contributers[1].image}
                alt=""
                className="rounded-full max-w-16 border-2 border-white"
              />
            </div>
          )}
          {contributers[2]?.muid && (
            <div className="-translate-x-6">
              <img
                src={contributers[2].image}
                alt=""
                className="rounded-full max-w-16 border-2 border-white"
              />
            </div>
          )}
          {contributers[3]?.muid &&
            (contributers.length !== 4 ? (
              <div className="-translate-x-9 font-jakarta font-bold rounded-full bg-[#eaf3ff] w-10 h-10  flex justify-center items-center ">
                <FaPlus className="text-sm text-center" />
                <span className="text-md">{contributers.length - 3}</span>
              </div>
            ) : (
              <div className="-translate-x-9">
                <img
                  src={contributers[2].image}
                  alt=""
                  className="rounded-full max-w-16 border-2 border-white"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
