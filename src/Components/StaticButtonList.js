import React from "react";

import StaticButton from "./StaticButton.js";
import { isNulish } from "../utils/index.js";

export function StaticButtonList({ buttons, handleBtnClick }) {
  return buttons.map(({ key, ...props }, index) => (
    <StaticButton
      key={(isNulish(key), index + "switch-multi--btns")}
      handleBtnClick={handleBtnClick}
      index={index}
      {...props}
    />
  ));
}
