import React from "react";
import PropTypes from "prop-types";
import ImageBannerContainer from "./style";

const ImageBanner = ({ imgSrc = "#", imgAlt = "", title = "" }) => (
  <ImageBannerContainer>
    <h1>{title}</h1>
    <img src={imgSrc} alt={imgAlt} />
  </ImageBannerContainer>
);

ImageBanner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string
};

ImageBanner.defaultProps = {
  title: ""
};

export default ImageBanner;
