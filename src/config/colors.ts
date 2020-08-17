/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import theme from "styled-theming";

const primaryLight = theme("mode", {
  dark: "#dcdcdd",
});

const secondaryLight = theme("mode", {
  dark: "#c5c3c6",
});

const primaryDark = theme("mode", {
  dark: "#27292a",
});

const secondaryDark = theme("mode", {
  dark: "#313335",
});

const accentLight = theme("mode", {
  dark: "#2bbade",
});

export {
  primaryDark,
  secondaryDark,
  primaryLight,
  secondaryLight,
  accentLight,
};
