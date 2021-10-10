import React from "react";

import { clsx } from "../utils/index.js";

export default function StaticButton({
  Button = "div",
  text,
  value,
  className,
  index,
  handleBtnClick,
  props = {},
}) {
  return (
    <Button
      className={clsx("sweep-button-item", className)}
      onClick={handleBtnClick(props.onClick, index, value)}
      {...props}
    >
      <span>{text}</span>
    </Button>
  );
}
