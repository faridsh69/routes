import { FC, PropsWithChildren } from "react";

import { Box, Container, Grid } from "@mui/material";

const Master: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Container>
      <Grid container>
        <Box margin={2}>{children}</Box>
      </Grid>
    </Container>
  );
};

export { Master };
