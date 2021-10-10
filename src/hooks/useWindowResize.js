import React from "react";

import { debounce } from "../utils";

export function useWindowResize() {
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    const toggleState = () => setState(state => !state);
    const func = debounce(toggleState);

    window.addEventListener("resize", func);

    return () => {
      window.removeEventListener("resize", func);
    };
  }, []);

  return state;
}
