import React from "react";
import Image from "./Image";
import ImageLikes from "./ImageLikes";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-container">
      {images.map((image) => (
        <div role="generic" key={image.id} className="image-card">
          <Image imgSrc={image.urls.full} />
          <div className="image-likes">
            <ImageLikes likes={image.likes} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
