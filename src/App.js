import React, { useContext } from "react";
import Carousel from "./components/Carousel/carousel";
import { ImgContext } from "./context/context";
import "./styles.css";

export default function App() {
  const { IMAGE_URLS } = useContext(ImgContext);

  console.log(IMAGE_URLS);
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel images={IMAGE_URLS} />
    </div>
  );
}
