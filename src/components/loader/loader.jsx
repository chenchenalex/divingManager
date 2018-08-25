import React from "react";
import PropTypes from "prop-types";
import StyledLoader from "./style";

const Loader = ({ text }) => <StyledLoader>{text}</StyledLoader>;

Loader.propTypes = {
  text: PropTypes.string
};

Loader.defaultProps = {
  text: "Loading..."
};

export default Loader;
