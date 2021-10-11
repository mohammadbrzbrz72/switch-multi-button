import React from "react";
import PropTypes from "prop-types";

import {
  FloatingButtonsWrapper,
  StaticButtonList,
} from "./Components/index.js";
import { useWindowResize, useSetTimeout } from "./hooks/index.js";
import {
  clsx,
  setActiveButtonLocation,
  findButtonActiveIndex,
} from "./utils/index.js";
import "./styles/index.css";
import { OPTIONS } from "./constants/index.js";

export function SwitchMultiButton({
  className,
  style,
  value,
  setValue,
  buttons,
  transition,
  direction,
  options,
}) {
  options = Object.assign({}, OPTIONS, options);
  const rootRef = React.useRef();
  const [isFirstMounting, setIsFirstMounting] = React.useState(false);
  const windowResize = useWindowResize();
  const [timeState, setTimeState] = useSetTimeout(Number(transition) * 1000);
  const [btnPosition, setBtnPosition] = React.useState({});
  const [activeIndex, setActiveIndex] = React.useState(
    findButtonActiveIndex(buttons, value),
  );

  const setDefaultButton = () => {
    const childrens = [...rootRef.current.children];
    const defaultButtonIndex = findButtonActiveIndex(buttons, value);

    setActiveButtonLocation(childrens[defaultButtonIndex], setBtnPosition);
  };

  const handleBtnClick = (onClick, index, buttonValue) => {
    return e => {
      if (onClick) onClick(e);
      setTimeState();
      setActiveButtonLocation(e.currentTarget, setBtnPosition);
      setActiveIndex(index);
      setValue(buttonValue);
    };
  };

  React.useEffect(() => {
    if (!isFirstMounting) setIsFirstMounting(true);

    setDefaultButton();
  }, [windowResize]);

  return (
    <div
      ref={rootRef}
      className={clsx(
        !options.removeCss && "switch-multi-button",
        className,
        buttons[activeIndex].activeRootClass,
      )}
      style={Object.assign({}, style, {
        direction,
        userSelect: options.userSelect,
      })}
    >
      <StaticButtonList buttons={buttons} handleBtnClick={handleBtnClick} />
      <FloatingButtonsWrapper
        isFirstMounting={isFirstMounting}
        timeState={timeState}
        buttons={buttons}
        activeIndex={activeIndex}
        transition={transition}
        btnPosition={btnPosition}
        options={options}
      />
    </div>
  );
}

SwitchMultiButton.defaultProps = {
  style: {},
  transition: 0.4,
  direction: "ltr",
  options: OPTIONS,
  buttons: [],
};

SwitchMultiButton.propTypes = {
  /**
   * root style
   */
  style: PropTypes.object,
  /**
   * set state
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * set your setState callback
   * and
   * you can change active button with setState by value
   */
  setValue: PropTypes.func.isRequired,
  /**
   * each object in array creates a button for you,
   * {
   *  text: show button label or children
   *  value: every button have to be unique value
   *  key: set your unique custom (default: package handle)
   *  Button: item element type (default: 'div'), (custom: 'a', 'p', 'pre', ... etc.)
   *  props: {} can be set all of the element props as object property.  => { onclick: () =>{}, ...}
   * }
   */
  buttons: PropTypes.array.isRequired,
  /**
   * root className
   */
  className: PropTypes.string,
  /**
   * button transition time. 1 equal to 1 seconds
   */
  transition: PropTypes.number,
  /**
   * language direction
   */
  direction: PropTypes.oneOf(["ltr", "rtl"]),
  /**
   * {
   *  toggleContext: undefined,
   *  removeCss: false,
   *  userSelect: 'none'
   * }
   * see document for more info
   */
  options: PropTypes.object,
};
