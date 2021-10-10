import React from "react";

import { SwitchMultiButton } from "../../index";

export default {
  component: SwitchMultiButton,
  title: "Examples/Toggle",
};

const TemplateLtr = args => {
  const [state, setState] = React.useState("first");

  return <SwitchMultiButton value={state} setValue={setState} {...args} />;
};
const TemplateRtl = args => {
  const [state, setState] = React.useState("مرد");

  return (
    <SwitchMultiButton
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
      text: "my first button",
      value: "first",
    },
    {
      text: "second button",
      value: "second",
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
  ],
};
