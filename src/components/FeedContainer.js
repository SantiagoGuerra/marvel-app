import React from 'react';
import {
  Link,
} from 'react-router-dom';
import FeedItem from './FeedItem';
import { Box, Heading } from 'grommet';

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
      <Heading>
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

export default FeedContainer;
