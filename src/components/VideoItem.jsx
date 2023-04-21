import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

function VideoItem({question}) {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/video/${id}`)
  }

  return (
    <div className="video-item" onClick={() => handleClick(question.id)}>
      <picture className='video-item-container'>
        {
          question.video.length > 0 ?
            <VideoPlayer url={question?.video} /> :
            <img className='video-placeholder' src="https://capeoffice.co.za/site/wp-content/uploads/2017/06/video-placeholder.png" alt="" />
        }
      </picture>
      <p className='video-question'>
        <span className='question-bold'>N° {question?.id} </span>
        {question.question}</p>
    </div>
  )
}

export default VideoItem
