import btnIcon from "../assets/button-icon.png";

const Button = ({text}) => {
  return (
    <button className=" text-primary flex gap-1.5 items-center font-bold ">
      {text} <img src={btnIcon} alt="btn icon" />{" "}
    </button>
  );
};

export default Button;
