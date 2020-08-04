import React from 'react';
import {
  Link,
} from "react-router-dom";
import FeedItem from './FeedItem';

const createFeedItems = feed => feed.map(
  ({ id, name, thumbnail }) => (
  <Link to={`/characters/${id}`} key={id} >
    <FeedItem name={name} thumbnail={thumbnail} /> 
  </Link>
));

function FeedContainer({ feed, filter }) {
  return (
      <div className="feed-container">
        <h2>
          {filter.currentCategory}
        </h2>

        {createFeedItems(feed)}

      </div>
  );
}

export default FeedContainer;
