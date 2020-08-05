import React from "react";
import { Grid } from "grommet";

function LayoutContainer({ children }) {
  return (
    <>
      <Grid
        rows={["xxsmall", "xsmall"]}
        columns={["xsmall", "small"]}
        gap="small"
        areas={[
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="nav" />
        <Box gridArea="main" background="light-2" />
      </Grid>
    </>
  );
}

export default LayoutContainer;
