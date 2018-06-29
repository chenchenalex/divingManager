import React from "react";
import NotFound from "./404-style";
import img from "src/assets/images/404.jpg";

export default () => {
  return (
    <NotFound>
      <img src={img} alt="page not found" />
      <p>我只能帮你到这儿了</p>
    </NotFound>
  );
};
