import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { PiOrange } from "react-icons/pi";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  const products = useLoaderData();
  console.log(products);

  return (
    <div className="section-container">
      <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

      {/* category tabs*/}

      <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-2 mb-16">
        <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center ">
          {categories.map((category, idx) => (
            <button
              className="text-center py-2 px-8 rounded-full hover:bg-primary hover:text-white"
              key={idx}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* products grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
