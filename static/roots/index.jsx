import React from "react";
import {render} from "react-dom";
import Header from "../components/header.jsx"


function IndexRoot(){
  return <Header headerContent={globalValuesDict.headerContent}/>;
}


render(
    <IndexRoot />,
    document.getElementById('root')
);