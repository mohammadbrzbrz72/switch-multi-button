export const clsx = (...clss) => clss.filter(Boolean).join(" ");

export const setActiveButtonLocation = (currentTarget, setBtnPosition) => {
  const { offsetTop: top, offsetLeft: left } = currentTarget;
  const { width, height } = currentTarget.getBoundingClientRect();

  setBtnPosition({
    top,
    left,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
  });
};

export const findButtonActiveIndex = (buttons, value) => {
  return buttons.findIndex(button => button.value === value);
};

export function debounce(func, timeout = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const isNulish = (nulishData, data) =>
  nulishData === undefined || nulishData === null ? data : nulishData;
