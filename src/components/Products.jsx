import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Button from "./Button";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  const products = useLoaderData();
  console.log(products);
  const [filterCategory, setFilterCategory] = useState("Chair");
  const [displayProduct, setDisplayProduct] = useState(4);

  const filteredProducts = products.filter(
    (product) => product.category === filterCategory
  );

  // handle show all button
  const handleShowMore = () => {
    setDisplayProduct((prev) => prev + 4);
  };

  return (
    <div className="section-container">
      <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

      {/* category tabs*/}

      <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-2 mb-16">
        <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center ">
          {categories.map((category, idx) => (
            <button
              onClick={() => setFilterCategory(`${category}`)}
              className={`text-center py-2 px-8 rounded-full hover:bg-primary hover:text-white ${
                category === filterCategory
                  ? "font-medium bg-primary text-white"
                  : ""
              }`}
              key={idx}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* products grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {filteredProducts.slice(0, displayProduct).map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>

      {/* show all button */}
      <div
        className={`flex justify-center items-center my-6  ${
          filteredProducts.length < displayProduct ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => handleShowMore(`${displayProduct}`)}
          className="px-4 py-2.5 border rounded-md bg-gray-50 shadow-md"
        >
          <Button text="Show All"></Button>
        </button>
      </div>
    </div>
  );
};

export default Products;
