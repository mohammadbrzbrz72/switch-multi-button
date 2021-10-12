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
      <br />
      <br />
      <br />

      <h4 style={{ marginTop: 30 }}>Change active button by value:</h4>
      <p className="code">( ) =&gt; changeTo.current.byValue(number);</p>

      {["one", "two", "three", "four"].map(data => (
        <button
          key={data + "v"}
          onClick={() => {
            changeTo.current.byValue(data);
          }}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export const ByValue = Template.bind({});
ByValue.args = {
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
