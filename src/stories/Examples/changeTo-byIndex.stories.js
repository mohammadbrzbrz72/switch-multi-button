import React from "react";

import { SwitchMultiButton } from "../../index";
import "./styles/global.css";

export default {
  component: SwitchMultiButton,
  title: "Examples/changeTo",
};

const Template = args => {
  const [state, setState] = React.useState("one");
  const changeTo = React.useRef();

  return (
    <div>
      <SwitchMultiButton
        value={state}
        setValue={setState}
        changeTo={changeTo}
        {...args}
      />
      <h4 style={{ marginTop: 30 }}>Change active button by index:</h4>
      <p className="code">( ) =&gt; changeTo.current.byIndex(number);</p>

      {[0, 1, 2, 3].map(data => (
        <button
          key={data + "i"}
          onClick={() => {
            changeTo.current.byIndex(data);
          }}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export const ByIndex = Template.bind({});
ByIndex.args = {
  buttons: [
    {
      text: "my first button",
      value: "one",
    },
    {
      text: "second button",
      value: "two",
    },
    {
      text: "third",
      value: "three",
    },
    {
      text: "fourth button",
      value: "four",
    },
  ],
};
