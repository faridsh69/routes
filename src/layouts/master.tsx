import { FC, PropsWithChildren } from "react";
import { Container } from "@mui/material";

import { MuiProvider } from "@contexts/MuiContext";

const Master: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <MuiProvider>
      <Container>{children}</Container>
    </MuiProvider>
  );
};

export { Master };
