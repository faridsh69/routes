import { FC, PropsWithChildren } from "react";

import { Container } from "@mui/material";

const Master: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Master };
