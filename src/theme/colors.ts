import { Colors } from "./types";

export const baseColors = {
  failure: "#A61B1B",
  // failure: "#CF6679",
  primary: "#243B53",
  primaryBright: "#334E68",
  primaryDark: "#102A43",
  secondary: "#486581",
  success: "#147D64",
  warning: "#C99A2E",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#121212",
  backgroundDisabled: "#2E2E2E",
  contrast: "rgba(224, 224, 224, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(224, 224, 224, .12)",
  tertiary: "rgba(224, 224, 224, .08)",
  text: "rgba(255, 255, 255, .87)",
  textDisabled: "rgba(255, 255, 255, .38)",
  textSubtle: "rgba(255, 255, 255, .60)",
  borderColor: "rgba(224, 224, 224, .12)",
  card: "rgba(33, 33, 33, .5)",
  modal: "#323232",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#121212",
  backgroundDisabled: "rgba(255, 255, 255, .38)",
  contrast: "rgba(224, 224, 224, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(224, 224, 224, .12)",
  tertiary: "rgba(224, 224, 224, .08)",
  text: "rgba(255, 255, 255, .87)",
  textDisabled: "rgba(255, 255, 255, .38)",
  textSubtle: "rgba(255, 255, 255, .60)",
  borderColor: "rgba(224, 224, 224, .12)",
  card: "rgba(33, 33, 33, .5)",
  modal: "#323232",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};
