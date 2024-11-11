import { useLoaderData } from "react-router-dom";
import Products from "../../components/Products";
import { useState } from "react";
import Experiences from "../../components/Experiences";
import Materials from "../../components/Materials";
import Testimonials from "../../components/Testimonials";

const Shop = () => {
 


  return (
    <div className="min-h-screen">
      <div className="bg-banner bg-center bg-cover h-[400px] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white ">
          Shop Our Products
        </h1>
      </div>

      {/* Proudcts */}
      <Products headline={"Whats Your Choice"}></Products>

      {/* experience and Materials fsection */}

      <Experiences></Experiences>
      <Materials></Materials>

      {/* testmonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Shop;
