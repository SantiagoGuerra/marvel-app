import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import FeedItem from './FeedItem';

const createFeedItems = feed => feed.map(
  ({ id, name, thumbnail }) => (
  <Link to={`/characters/${id}`}>
    <FeedItem key={id} name={name} thumbnail={thumbnail} /> 
  </Link>
));

function FeedContainer({ feed, filter }) {
  return (
    <Router>
      <div className="feed-container">
        <h2>
          {filter.currentCategory}
        </h2>

        {createFeedItems(feed)}

      </div>
    </Router>
  );
}

export default FeedContainer;
