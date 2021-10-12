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
  buttons,
  value,
  setValue,
  changeTo,
  transition,
  direction,
  options,
}) {
  options = Object.assign({}, OPTIONS, options);
  const rootRef = React.useRef();
  const activeData = React.useRef({
    value,
    index: findButtonActiveIndex(buttons, value),
  });

  const [isFirstMounting, setIsFirstMounting] = React.useState(false);
  const windowResize = useWindowResize();
  const [timeState, setTimeState] = useSetTimeout(Number(transition) * 1000);
  const [btnPosition, setBtnPosition] = React.useState({});

  const setDefaultButton = () => {
    const childrens = [...rootRef.current.children];
    const defaultButtonIndex = findButtonActiveIndex(buttons, value);

    setActiveButtonLocation(childrens[defaultButtonIndex], setBtnPosition);
  };

  const handleChangeTo = (type, data) => {
    const isValue = type === "value";
    const buttonIndex = isValue ? findButtonActiveIndex(buttons, data) : data;
    const buttonValue = isValue ? data : buttons[data].value;

    if (
      !(
        buttonIndex === activeData.current.index ||
        buttonValue === activeData.current.value
      )
    ) {
      const childrens = [...rootRef.current.children];
      setTimeState();
      setActiveButtonLocation(childrens[buttonIndex], setBtnPosition);
      activeData.current.index = buttonIndex;
      setValue(buttonValue);
    }
  };

  const handleBtnClick = (onClick, index, buttonValue) => {
    return e => {
      if (onClick) onClick(e);
      setTimeState();
      setActiveButtonLocation(e.currentTarget, setBtnPosition);
      activeData.current.index = index;
      setValue(buttonValue);
    };
  };

  React.useEffect(() => {
    if (changeTo) activeData.current.value = value;
  }, [value]);

  React.useEffect(() => {
    if (!isFirstMounting) {
      setIsFirstMounting(true);

      if (changeTo) {
        changeTo.current = {};
        changeTo.current.byValue = handleChangeTo.bind(null, "value");
        changeTo.current.byIndex = handleChangeTo.bind(null, "index");
      }
    }

    setDefaultButton();
  }, [windowResize]);

  return (
    <div
      ref={rootRef}
      className={clsx(
        !options.removeCss && "switch-multi-button",
        className,
        buttons[activeData.current.index].activeRootClass,
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
        activeIndex={activeData.current.index}
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
   */
  setValue: PropTypes.func.isRequired,
  /**
   * you can change active button by sending ref as props
   * and changing active button with value or index.
   * usage:
   * changeTo.current.byValue('some-value');
   * changeTo.current.byIndex(2);
   */
  changeTo: PropTypes.object,
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
