import React from "react";
import PropTypes from "prop-types";
import StyledLoader from "./style";

const Loader = ({ text }) => (
  <StyledLoader>{text || "Loading..."}</StyledLoader>
);

Loader.propTypes = {
  text: PropTypes.string.isRequired
};

export default Loader;
