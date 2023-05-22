import React, { useEffect, useState } from "react";

const Image = ({ singleImage, smallImg }) => {
  const PlaceHolderImg = "https://source.unsplash.com/featured/300x201";
  const [error, setError] = useState(false);

  const onErrorClick = () => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [singleImage]);

  return (
    <div className="imageContainer">
      <img
        src={error ? PlaceHolderImg : singleImage}
        alt="SingleImg"
        className={smallImg ? "smallImg" : "singleImage"}
        onError={onErrorClick}
      />
    </div>
  );
};

export default Image;
