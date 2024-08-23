import Navbar from "../../components/public_nav/Navbar";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import Events from "./components/Events";

function Main() {
  return (
    <div className="flex flex-col gap-5 relative overflow-x-hidden w-full">
      <Navbar />
      <div className="container mx-auto p-6 h-full w-full flex">
        <div className="lg:border-r-[1px] lg:border-gray-300 h-full w-full lg:w-3/4 lg:px-24 px-8">
          <Welcome />
          <div className=" flex flex-col gap-5 justify-center items-center">
            <p className="text-2xl text-left w-full py-4 border-b-[1px] border-gray-300">
              Recent Launches
            </p>
            <Products />
          </div>
        </div>
        <Events />
        {/* <div className="flex mt-8 w-1/3 px-24">gkgjrti</div> */}
      </div>
    </div>
  );
}

export default Main;
