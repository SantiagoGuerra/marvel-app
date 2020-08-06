import React from 'react';
import { Grid, Box } from 'grommet';
import Filter from '../components/Filter';

function LayoutContainer({ children }) {
  return (
    <>
      <Grid
        rows={['xxsmall', 'large']}
        columns={['300px', 'calc(100% - 316px)']}
        gap="small"
        areas={[
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Filter gridArea="nav" />
        <Box gridArea="main" pad="large">
          {children}
        </Box>
      </Grid>
    </>
  );
}

export default LayoutContainer;
