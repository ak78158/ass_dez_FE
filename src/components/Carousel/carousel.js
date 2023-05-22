import React, { useEffect, useState } from "react";
import Button from "../button/button";
import Image from "../Image/image";
import ImgList from "../imgList/imgList";

const Carousel = ({ images }) => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const onPrevClick = () => {
    if (currImgIndex !== 0) {
      setCurrImgIndex(currImgIndex - 1);
    } else {
      setCurrImgIndex(images.length - 1);
    }
  };

  const onNextClick = () => {
    if (currImgIndex !== images.length - 1) {
      setCurrImgIndex(currImgIndex + 1);
    } else {
      setCurrImgIndex(0);
    }
  };

  useEffect(() => {
    const timerd = setInterval(() => {
      onNextClick();
    }, 5000);
    return () => {
      clearInterval(timerd);
    };
  }, [currImgIndex]);
  return (
    <>
      <div className="carouselContainer">
        <Button btnText="prev" onClick={onPrevClick} />
        <Image singleImage={images[currImgIndex]} className="carouselImg" />
        <Button btnText="next" onClick={onNextClick} />
      </div>
      <div>
        <ImgList images={images} />
      </div>
    </>
  );
};

export default Carousel;
