import React from "react";

import FloatingButtons from "./FloatingButtons.js";
import { clsx } from "../utils/index.js";

export function FloatingButtonsWrapper({
  isFirstMounting,
  timeState,
  buttons,
  activeIndex,
  transition,
  btnPosition,
  options,
}) {
  if (isFirstMounting) {
    return (
      <div
        className={clsx(
          "sweep-button-item",
          "sweep-button-item-active",
          buttons[activeIndex].activeItemClass,
        )}
        style={Object.assign({ transition: `${transition}s` }, btnPosition)}
      >
        <FloatingButtons
          timeState={timeState}
          buttons={buttons}
          activeIndex={activeIndex}
          options={options}
        />
      </div>
    );
  }

  return null;
}
