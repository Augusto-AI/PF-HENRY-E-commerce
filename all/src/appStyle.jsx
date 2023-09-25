// appStyle.js
import React from "react";
import { useSelector } from "react-redux";

const AppStyle = () => {
    const darkMode = useSelector((state) => state.darkMode);
  
    const array = Object.values(darkMode);
    const darkModelo = array[0];

    return darkModelo;
}

export default AppStyle;
