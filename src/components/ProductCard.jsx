import { FiPlus } from "react-icons/fi";
import { getImgUrl } from "../utils/getImageURL";
import Rating from "./Rating";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-gray-100 rounded-md">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base mb-1">{product.category}</h4>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <button className=" border rounded-full p-2 focus:outline-none">
            <FaRegHeart className="text-red-500 text-lg"></FaRegHeart>
          </button>
        </div>
        <Rating rating={product.rating}></Rating>
        <div className="flex justify-between mt-4">
          <h3 className="text-xl font-bold ">
            {" "}
            <sup>$</sup>
            {product.price}
          </h3>

          <div className=" space-x-2.5">
            <button className="bg-secondary text-white p-2 rounded-full hover:bg-opacity-80">
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
