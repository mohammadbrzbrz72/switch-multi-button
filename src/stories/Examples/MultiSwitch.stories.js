import React from "react";

import { SwitchMultiButton } from "../../index";

export default {
  component: SwitchMultiButton,
  title: "Examples/MultipleSwitch",
};

const TemplateLtr = args => {
  const [state, setState] = React.useState("first");

  return <SwitchMultiButton value={state} setValue={setState} {...args} />;
};

export const MultipleButtonsLtr = TemplateLtr.bind({});
MultipleButtonsLtr.args = {
  buttons: [
    {
      text: "first button in nav",
      value: "first",
    },
    {
      text: "my second button",
      value: "second",
    },
    {
      text: "third",
      value: "third",
    },
    {
      text: "fourth button is here!",
      value: "fourth",
    },
    {
      text: "fifth",
      value: "fifth",
    },
  ],
};

const TemplateRtl = args => {
  const [state, setState] = React.useState("اول");

  return <SwitchMultiButton value={state} setValue={setState} {...args} />;
};

export const MultipleButtonsRtl = TemplateRtl.bind({});
MultipleButtonsRtl.args = {
  direction: "rtl",
  buttons: [
    {
      text: "اولی",
      value: "اول",
    },
    {
      text: "دومین",
      value: "دوم",
    },
    {
      text: "سومین عدد",
      value: "سوم",
    },
    {
      text: "چهارمین انتخابی",
      value: "چهارم",
    },
    {
      text: "پنج",
      value: "پنجم",
    },
  ],
};
