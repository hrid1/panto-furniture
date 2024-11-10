import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  const totalScore = 5;
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalScore }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <AiFillStar className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-gray-400" />
        );
      })}
    </div>
  );
};

export default Rating;
