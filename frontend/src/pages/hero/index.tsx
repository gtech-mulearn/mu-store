import logo from "./assets/logo.svg";
import background from "./assets/background.png";
import banner from "./assets/banner.png";
import stats from "./assets/stats.png";
import steps from "./assets/steps.svg";
import mulearn from "./assets/mulearn.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import twitter from "./assets/twitter.svg";
import discord from "./assets/discord.svg";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
const Hero = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-screen gap-10 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex text-center flex-col gap-3">
          <h1 className="font-plus-jakarta-sans text-2xl">Welcome To</h1>
          <img src={logo} />
        </div>
        <div className="flex gap-2 justify-between">
          <button className="font-plus-jakarta-sans text-md text-white bg-[#132972] rounded-full px-8 py-2">
            Sign In
          </button>
          <button className="border-4 border-[#132972] rounded-full px-8 py-2 font-plus-jakarta-sans">
            Sign Up
          </button>
        </div>
      </div>
      <div>
        <img src={banner} className="py-20" />
      </div>
      <div>
        <div className="flex flex-col items-center text-center justify-center px-40 text-2xl gap-16">
          <div className="font-plus-jakarta-sans text-2xl">
            <span className="text-[#132972] font-bold">MuStore</span> is your
            one-stop platform for everything hackathon! We're passionate about
            fostering a vibrant community of creators and innovators. Whether
            you're a seasoned participant or just starting your hackathon
            journey, <span className="text-[#132972] font-bold">MuStore</span>{" "}
            empowers you to, explore groundbreaking ideas, unleash your talents,
            gain recognition and{" "}
            <span className="text-[#132972] font-bold">
              to connect and grow.
            </span>
          </div>
          <div>
            We believe in fostering a supportive and inclusive environment where
            everyone can learn, grow, and achieve their hackathon goals. Welcome
            to <span className="text-[#132972] font-bold">MuStore</span>, your
            launchpad to hackathon success!
          </div>
        </div>
      </div>
      <img src={stats} className="pt-32" />
      <div className="flex items-center justify-center">
        <img src={steps} className="" />
      </div>
      <div className="bg-gradient-to-r from-[#132972] to-[#244FD8] min-h-64 flex justify-around items-center ">
        <div>
          <div className="flex flex-col gap-5">
            <img src={mulearn} className="max-w-24" />
            <p className="max-w-72 text-white font-inter text-sm">
              A community that focuses on learning, upskilling and networking,
              while striving for creativity and innovation. TLDR, its a place
              for every passionate learner out there!
            </p>
            <div className="flex gap-2 items-center justify-start">
              <img src={twitter} className="w-6  h-6" />
              <img src={discord} className="w-6 h-6" />
              <img src={youtube} className="w-6 h-6" />
              <img src={facebook} className="w-6" />
              <img src={instagram} className="w-6" />
            </div>
          </div>
        </div>
        <div className="flex gap-20 text-white">
          <div className="flex flex-col gap-2">
            <p className="text-base text-white font-bold font-roboto">
              Address
            </p>
            <div>
              <p className="font-alef text-white">
                Technopark Phase 1-East Gate Entrance
                <br />
                Technopark Campus, Kazhakkoottam,
                <br />
                Thiruvananthapuram, Kerala India - 695581
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold font-roboto text-white text-base">
              Contact
            </p>
            <div>
              <div className="flex gap-2">
                <img src={email} className="max-w-24" />
                <span className="font-alef text-white">exampkle@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <img src={phone} className="max-w-24" />
                <span className="font-alef text-white">+91 1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
