import React from "react";

export function useSetTimeout(time = 350) {
  const [state, setState] = React.useState(true);

  const toggleState = React.useCallback(() => {
    setState(false);
    const currentTime = time + 100;

    setTimeout(() => {
      setState(true);
    }, currentTime);
  }, []);

  return [state, toggleState];
}
