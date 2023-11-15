import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    acccents: {
      yellow: "#f8c00f",
      red: "#d21e1f",
      lime: "#A8CE27",
      army: "#4B510B",
    },
    tints: {
      yellow: "#fbdf83",
      red: "#f5bcbc",
      lime: "#EBF5C9",
    },
    neutrals: {
      dark: "#582C12",
      light: "#f6e1d5",
    },
  },
});

export const locales = {
  en: { title: "EN" },
  ro: { title: "RO" },
};
