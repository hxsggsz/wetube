import React, { createContext, SetStateAction } from "react";
import { ThemeType } from "../../styles/themes/interfaces";

const ColorModeContext = createContext([
  "light",
  (() => {}) as React.Dispatch<SetStateAction<ThemeType>> ,
]);

export default ColorModeContext;