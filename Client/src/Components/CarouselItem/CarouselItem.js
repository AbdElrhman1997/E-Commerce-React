import React from "react";
import "./CarouselItem.scss";

const CarouselItem = ({ imgUrl, title, count }) => {
  return (
    <div className="category-item" count={`(${count})`}>
      <div className="category-img">
        <img src={imgUrl} />
      </div>
      <div className="category-content">
        <p>{title}</p>
        <div className=" text-main" href="#">
          Show All
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
