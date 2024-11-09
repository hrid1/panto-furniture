import { FaSearch } from "react-icons/fa";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* content */}

      <div className="text-white md:pt-32 pt-20 text-center w-1/2 mx-auto space-y-6 px-2">
        <h1 className="text-4xl lg:text-6xl font-semibold lg:leading-tight leading-snug">
          Make Your interior more minimalstic & modern
        </h1>
        <p className="text-lg">
          Turn your room with panto into a lot more <br /> minimalstic and
          modern with ease and speed.
        </p>
        <div className=" relative inline-block z-10">
          <input
            type="text"
            placeholder="Search furniture"
            className="bg-white/20  rounded-full w-full md:w-80 px-4 py-2 border border-gray-300 focus:outline-none placeholder-slate-300"
          />
          <span className=" absolute top-1 right-2 bg-primary rounded-full p-2">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* bottom blur effect */}
      <div className=" absolute inset-x-0 bottom-0 h-3/4 text-white -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"/>

    </section>
  );
};

export default Banner;
