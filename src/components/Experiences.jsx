import Button from "../components/Button.jsx";
import experience from "../assets/sections/expricences.png";

const Experiences = () => {
  return (
    <section className="md:my-24 flex flex-col md:flex-row items-center md:justify-between md:gap-8 container mx-auto">
      <div className="md:w-1/2 h-[540px]">
        <img src={experience} alt="experience" />
      </div>

      <div className="w-full md:w-1/2  flex-col md:flex-row items-center px-2">
        <h4 className="text-2xl uppercase font-semibold text-primary">
          Experiences
        </h4>
        <h1 className="text-4xl font-bold capitalize leading-tight mb-4 md:w-1/2">
          we provide you the best experience
        </h1>
        <p className="text-gray-600 mb-4 md:w-2/3">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>

        <Button text={"More Info"}></Button>
      </div>
    </section>
  );
};

export default Experiences;
