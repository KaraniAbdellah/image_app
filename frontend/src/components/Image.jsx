import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Image = (props) => {
  const { imgSrc } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [overlayText, setOverlayText] = useState("");

  useEffect(() => {
    if (isHovered) {
      setOverlayText("Click to copy URL");
    } else {
      setOverlayText("");
    }
  }, [isHovered]);

  return (
    <div
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={async () => {
        console.log(imgSrc);
        await navigator.clipboard.writeText(imgSrc);
        toast.success("Image URL copied to clipboard!");
      }}
    >
      <img src={imgSrc} alt="img" />
      {overlayText && <div className="overlay-text">{overlayText}</div>}
    </div>
  );
};

export default Image;
