import { createTheme } from "@mui/material/styles";
import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/system";

export const themeGlobalStyles: Interpolation<Theme> = {
  ":root": {
    "--cell-orange": "rgb(228, 92, 0)",
    "--cell-gray": "rgb(167, 175, 179)",
  },
};

const themeWithBreakPoints = createTheme();
export const muiTheme = createTheme(themeWithBreakPoints, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          [themeWithBreakPoints.breakpoints.down("md")]: {
            fontSize: "0.8rem",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgb(228, 92, 0)",
    },
    secondary: {
      main: "rgb(167, 175, 179)",
    },
  },
});
