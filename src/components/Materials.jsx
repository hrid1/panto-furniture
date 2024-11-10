import Button from "./Button";
import material1 from "../assets/material1.png";
import material2 from "../assets/material2.png";
import material3 from "../assets/material3.png";

const Materials = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container mx-auto my-24 ">
      <div className="w-full md:w-1/2 pl-12">
        <h4 className="text-2xl uppercase text-primary font-semibold">
          Materials
        </h4>
        <h2 className="text-4xl font-bold md:w-1/2 capitalize my-4 leading-tight">
          Very serious materials for making furniture
        </h2>
        <p className="text-gray-600 w-2/3 mb-4">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>

        <Button text={"More Info"}></Button>
      </div>

      <div className="md:w-1/2 flex items-center justify-center ml-6">
        <div className="flex flex-col items-center justify-center w-[223px]">
          <img src={material1} alt="" />
          <img src={material2} alt="" />
        </div>

        <div>
          <img src={material3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Materials;
