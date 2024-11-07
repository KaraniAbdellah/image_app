import React from "react";
import { FaHeart } from "react-icons/fa";

const ImageLikes = ({ likes }) => {
  return (
    <>
      <FaHeart className="heart-icon" aria-label="Heart Icon" />
      {likes}
    </>
  );
};

export default ImageLikes;
