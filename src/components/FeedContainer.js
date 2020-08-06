import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { Box, Heading } from 'grommet';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';

const createFeedItems = feed => feed.map(
  ({ id, name, thumbnail }) => (
    <Link to={`/characters/${id}`} key={id}>
      <FeedItem name={name} thumbnail={thumbnail} />
    </Link>
  ),
);

function FeedContainer({ feed, filter }) {
  return (
    <Box
      direction="column"
      align="center"
    >
      <Heading
        style={{
          textTransform: 'capitalize',
        }}
      >
        {filter.currentCategory}
      </Heading>
      <Box
        direction="row"
        wrap
        gap="small"
        justify="center"
      >
        {createFeedItems(feed)}

      </Box>

    </Box>
  );
}

FeedContainer.propTypes = {
  feed: PropTypes.oneOfType([PropTypes.array]).isRequired,
  filter: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default FeedContainer;
