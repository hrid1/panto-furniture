import Button from "../../components/Button";

const WhyChoose = () => {
  return (
    <section className="section-container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-24 gap-8 md:gap12 text-left items-center ">
        <div className="my-auto">
          <h2 className="text-4xl font-bold ">
            Why <br />
            Choosing Us
          </h2>
        </div>
        {/* cards */}
        <div>
          <h4 className="text-2xl font-bold mb-3">Luxury facilities</h4>
          <p className="mb-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
            velit quidem.
          </p>
          <Button text={"More Info"}></Button>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Luxury facilities</h4>
          <p className="mb-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
            velit quidem.
          </p>
          <Button text={"More Info"}></Button>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Luxury facilities</h4>
          <p className="mb-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
            velit quidem.
          </p>
          <Button text={"More Info"}></Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
