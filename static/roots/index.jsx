import React from "react";
import { render } from "react-dom";
import Header from "../components/header.jsx";
import Counter from "../components/counter.jsx";

function IndexRoot() {
  return (
    <div>
      <Header headerContent={globalValuesDict.headerContent} />
      <Counter />
    </div>
  );
}

render(<IndexRoot />, document.getElementById("root"));
