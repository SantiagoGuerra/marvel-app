import React from 'react'
import FeedItem from './FeedItem'


const createFeedItems = (feed) =>  {
  return feed.map(({id, name, thumbnail}) => {

    return (<FeedItem key={id} name={name} thumbnail={thumbnail}/>)
  })


}


function FeedContainer({feed, filter}) {

  return (
    <div className="feed-container">
      <h2>
        {filter.currentCategory}
      </h2>
      
      {createFeedItems(feed)}

    </div>
  )
}

export default FeedContainer;
