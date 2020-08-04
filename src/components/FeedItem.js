import React from 'react'

function FeedItem({
  name,
  thumbnail
}) {
  return (
    <div className="feed-item">
      <img src={ thumbnail.path + '.' + thumbnail.extension }>
      
      </img>
      <p>
        {name}
      </p>
    </div>
  )
}

export default FeedItem;
