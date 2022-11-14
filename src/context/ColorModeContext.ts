import React, { createContext, SetStateAction } from "react";
import { ThemeType } from "../../styles/themes/interfaces";

const ColorModeContext = createContext([
  "dark",
  (() => {}) as React.Dispatch<SetStateAction<string>>,
]);

export default ColorModeContext;
