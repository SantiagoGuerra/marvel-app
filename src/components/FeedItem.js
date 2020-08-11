import React from 'react';
import styled from 'styled-components';
import { Text, Box } from 'grommet';
import PropTypes from 'prop-types';

const StyledBox = styled(Box)`
  width: calc(100vw - 32px);
  height: 200px;
  position: relative;
  margin-top: 20px;
  overflow: hidden;


  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.6530987394957983) 24%, rgba(255,255,255,0) 100%);
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
    width: 100%;
    z-index: -200;
    transition: .3s transform ease-in-out;
  }

  & .text {
    color: #fff;
    text-decoration: none;
    bottom: 12px;
    left: 12px;
    position: absolute;
    transition: .3s transform ease-in-out;
    transform: translateY(200%)
  }


  &:hover .img {
    transform: scale(1.5, 1.5)
  }

  &:hover .text {
    transform: translateY(0)
  }

  @media screen and (min-width: 375px) {
    width: 200px;
  }
`;

function FeedItem({
  name,
  thumbnail,
}) {
  return (
    <StyledBox
      animation={['fadeIn', 'slideDown']}
      className="feed-item"
    >
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className="img" />
      <Text className="text">{name}</Text>
    </StyledBox>
  );
}

FeedItem.defaultProps = {
  name: '',
  thumbnail: {
    path: '',
    extension: '',
  },
};

FeedItem.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.object]),
};

export default FeedItem;
