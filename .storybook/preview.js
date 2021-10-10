export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Getting Started",
        ["Introduction", "Installation"],
        "Examples",
        ["Toggle", "CircleToggle", "MultipleSwitch"],
        "Examples css",
        "Document",
      ],
    },
  },
};
