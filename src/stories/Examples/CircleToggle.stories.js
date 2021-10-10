import React from "react";

import { SwitchMultiButton } from "../../index";
import "./styles/circle-toggle.css";

export default {
  component: SwitchMultiButton,
  title: "Examples/CircleToggle",
};

const Template = args => {
  const [state, setState] = React.useState("on");

  return (
    <SwitchMultiButton
      value={state}
      setValue={setState}
      className="circle-toggle"
      options={{ toggleContext: "" }}
      {...args}
    />
  );
};

export const CircleToggle1 = Template.bind({});
CircleToggle1.args = {
  buttons: [
    {
      text: "On",
      value: "on",
    },
    {
      text: "Off",
      value: "off",
    },
  ],
};

export const CircleToggle2 = Template.bind({});
CircleToggle2.args = {
  buttons: [
    {
      value: "on",
      activeRootClass: "root-toggle-on",
      activeItemClass: "item-toggle-on",
    },
    {
      value: "off",
      activeRootClass: "root-toggle-off",
      activeItemClass: "item-toggle-off",
    },
  ],
};
