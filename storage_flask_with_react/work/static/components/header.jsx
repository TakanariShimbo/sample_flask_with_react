import React from "react";
import logContent from "../helpers/log.js";

function Header(props) {
  logContent(props.headerContent);
  return <h1>{props.headerContent}</h1>;
}

export default Header;
