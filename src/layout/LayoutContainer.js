import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LayoutContainer({ children }) {
  const StyledBoxContainer = styled(Box)`
  
    margin: auto;
    max-width: 1120px;
    margin-bottom: 60px;

  `;

  return (
    <>

      {/* <Filter gridArea="nav" /> */}
      <StyledBoxContainer gridArea="main" pad={0}>
        {children}
      </StyledBoxContainer>
    </>
  );
}

LayoutContainer.defaultProps = {
  children: {},
};

LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]),
};

export default LayoutContainer;
