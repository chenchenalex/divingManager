import React from "react";
import img from "src/assets/images/404.jpg";
import NotFound from "./404-style";

export default () => (
  <NotFound>
    <img src={img} alt="page not found" />
    <p>我只能帮你到这儿了</p>
  </NotFound>
);
