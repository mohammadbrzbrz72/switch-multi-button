import React from "react";

import { SwitchMultiButton } from "../../index";
import "./styles/group-multi-switch.css";

export default {
  component: SwitchMultiButton,
  title: "Examples/Group",
};

const Template = args => {
  const [state, setState] = React.useState("first");

  return (
    <SwitchMultiButton
      className="group-multi-switch"
      value={state}
      setValue={setState}
      {...args}
    />
  );
};

export const GroupMultiSwitch = Template.bind({});
GroupMultiSwitch.args = {
  buttons: [
    {
      text: "first",
      value: "first",
    },
    {
      text: "second",
      value: "second",
    },
    {
      text: "third",
      value: "third",
    },
    {
      text: "fourth",
      value: "fourth",
    },
    {
      text: "fifth",
      value: "fifth",
    },
    {
      text: "Six",
      value: "Six",
    },
    {
      text: "Seven",
      value: "Seven",
    },
    {
      text: "Eight",
      value: "Eight",
    },
    {
      text: "Nine",
      value: "Nine",
    },
  ],
};
