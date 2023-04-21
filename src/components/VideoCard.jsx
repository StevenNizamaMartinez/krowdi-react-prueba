import React from 'react'

function VideoCard({question}) {

  return (
    <div className="video-item">
      <img src="Rectangle.svg" alt="" />
      <h3>{question}</h3>
    </div>
  )
}

export default VideoCard
