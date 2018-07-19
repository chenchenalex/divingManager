import React from "react";
import StyledLoader from "./style";

const Loader = ({ text }) => {
  return <StyledLoader>{text || "Loading..."}</StyledLoader>;
};

export default Loader;
