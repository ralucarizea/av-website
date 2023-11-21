import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "490px",
  sm: "640px",
  md: "820px",
  lg: "1000px",
  xl: "1350px",
};
export const theme = extendTheme({
  fonts: {
    sans: "DM Sans",
    handwritten: "WardahRounded",
    serif: "DM Serif Display",
  },
  fontSizes: {
    "2xs": "0.65rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.4rem",
    "2xl": "1.6rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  lineHeights: {
    none: 1,
    xs: 1.25,
    sm: 1.375,
    md: 1.5,
    lg: 1.625,
    xl: "2",
    "2xl": ".75rem",
    "3xl": "1rem",
    "4xl": "1.25rem",
    "5xl": "1.5rem",
    "6xl": "1.75rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints,
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    fit: "fit-content",
    
  },
  colors: {
    accents: {
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
export const MDfont = {
  base: "11px",
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "sm",
  xl: "md",
};
export const LGfont = {
  base: "sm",
  xs: "md",
  sm: "md",
  md: "md",
  lg: "lg",
  xl: "lg",
};
export const XXLfont = {
  base: "md",
  xs: "lg",
  sm: "lg",
  md: "xl",
  lg: "xl",
  xl: "3xl",
};
export const locales = {
  en: { title: "EN" },
  ro: { title: "RO" },
};
