import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";

import { themeGlobalStyles, muiTheme } from "@styles/theme";

export const MuiProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalStyles styles={themeGlobalStyles} />
      {children}
    </ThemeProvider>
  );
};
