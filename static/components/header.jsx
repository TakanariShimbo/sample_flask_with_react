import React from "react";
import logContent from "../helpers/log.js"


export default function Header(props) {
  logContent(props.headerContent);
  return <h1>{props.headerContent}</h1>;
}
