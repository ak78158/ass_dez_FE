import React, { createContext } from "react";

export const ImgContext = createContext();

const Context = ({ children }) => {
  const IMAGE_URLS = [
    "https://source.unsplash.com/random/200x200?sig=1",
    "abcd://source.unsplash.com/random/200x200?sig=2",
    "https://source.unsplash.com/random/200x200?sig=3",
    "https://source.unsplash.com/random/200x200?sig=4",
    "https://source.unsplash.com/random/200x200?sig=5",
    "https://source.unsplash.com/random/200x200?sig=6",
    "https://source.unsplash.com/random/200x200?sig=7",
    "https://source.unsplash.com/random/200x200?sig=8",
    "https://source.unsplash.com/random/200x200?sig=9",
    "https://source.unsplash.com/random/200x200?sig=10"
  ];
  return (
    <ImgContext.Provider value={{ IMAGE_URLS }}>{children}</ImgContext.Provider>
  );
};

export default Context;
