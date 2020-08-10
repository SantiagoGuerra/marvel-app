import React from 'react';
import { Header as GrommetHeader, Image, Box } from 'grommet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MarvelLogo from '../assets/marvel-logo.png';

const Header = () => {
  const StyledHeaderContainer = styled(Box)`
    max-width: 1120px;
    width: 100%;
    margin: auto;
    display: flex;

    & > a {
      display: inline-block;
      width: 120px;
    }
  `;

  return (
    <GrommetHeader
      background="brand"
      pad="small"
    >

      <StyledHeaderContainer>

        <Link exact to="/" width="auto">
          <Image
            width="120px"
            height="auto"
            src={MarvelLogo}
          />
        </Link>

      </StyledHeaderContainer>
    </GrommetHeader>
  );
};

export default Header;
