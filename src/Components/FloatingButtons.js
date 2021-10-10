import React from "react";

import { isNulish } from "../utils/index.js";

export default function FloatingButtons({
  timeState,
  buttons,
  activeIndex,
  options,
}) {
  if (timeState) {
    return (
      <span>{isNulish(options.toggleContext, buttons[activeIndex].text)}</span>
    );
  }

  return null;
}
