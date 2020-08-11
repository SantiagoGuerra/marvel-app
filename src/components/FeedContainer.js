import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { Box } from 'grommet';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';
import Paginate from './Pagination';

const createFeedItems = feed => feed.map(
  ({ id, name, thumbnail }) => (
    <Link to={`/characters/${id}`} key={id}>
      <FeedItem name={name} thumbnail={thumbnail} />
    </Link>
  ),
);

function FeedContainer({ feed }) {
  return (
    <>
      <Box
        direction="column"
        align="center"
        pad={0}

      >

        <Box
          direction="row"
          wrap
          gap="small"
          justify="center"
          margin={{
            vertical: '48px',
          }}
        >
          {createFeedItems(feed)}

        </Box>
        <Paginate />
      </Box>
    </>
  );
}

FeedContainer.defaultProps = {
  feed: [],
};

FeedContainer.propTypes = {
  feed: PropTypes.oneOfType([PropTypes.array]),
};

export default FeedContainer;
