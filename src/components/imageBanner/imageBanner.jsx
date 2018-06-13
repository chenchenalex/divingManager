import React from "react";
import ImageBannerContainer from "./style";

const ImageBanner = ({ imgSrc = "#", imgAlt = "", title = "" }) => {
  return (
    <ImageBannerContainer>
      <h1>{title}</h1>
      <img src={imgSrc} alt={imgAlt} />
    </ImageBannerContainer>
  );
};

export default ImageBanner;
