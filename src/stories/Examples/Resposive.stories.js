import React from "react";

import { SwitchMultiButton } from "../../index";
import "./styles/resposive.css";

export default {
  component: SwitchMultiButton,
  title: "Examples/Responsive",
};

const TemplateLtr = args => {
  const [state, setState] = React.useState("english");

  return (
    <SwitchMultiButton
      className="resposive"
      value={state}
      setValue={setState}
      {...args}
    />
  );
};
const TemplateRtl = args => {
  const [state, setState] = React.useState("مرد");

  return (
    <SwitchMultiButton
      className="resposive"
      direction="rtl"
      value={state}
      setValue={setState}
      {...args}
    />
  );
};

export const ToggleLtr = TemplateLtr.bind({});
ToggleLtr.args = {
  buttons: [
    {
      text: "english",
      value: "english",
    },
    {
      text: "persian",
      value: "persian",
    },
    {
      text: "arabic",
      value: "arabic",
    },
    {
      text: "indian",
      value: "indian",
    },
  ],
};

export const ToggleRtl = TemplateRtl.bind({});
ToggleRtl.args = {
  buttons: [
    {
      text: " پوشاک مردانه",
      value: "مرد",
    },
    {
      text: "پوشاک زنانه",
      value: "زن",
    },
    {
      text: "تیشرت",
      value: "تیشرت",
    },
    {
      text: "زمستانه",
      value: "زمستان",
    },
    {
      text: "حراج فصل",
      value: "حراج",
    },
  ],
};
