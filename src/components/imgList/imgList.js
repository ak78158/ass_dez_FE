import React from "react";
import Image from "../Image/image";

const ImgList = ({ images }) => {
  return (
    <div className="imagesContainer">
      {images.map((element, index) => {
        return <Image singleImage={element} smallImg={true} key={index} />;
      })}
    </div>
  );
};

export default ImgList;
