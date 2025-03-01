import React from "react";

const LoadMoreButton = ({ onClick, visible }) => {
  if (!visible) return null;

  return (
    <div className="load-more">
      <button className="btn" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
