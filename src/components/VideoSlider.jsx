import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext';

import { responsive } from '../libs/slider';

import { useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Carousel from "react-multi-carousel";
import { FaPlay } from 'react-icons/fa';

function VideoSlider() {
  const { data } = useAppContext();
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/video/${id}`)
  }

  return (
    <Carousel
      infinite
      shouldResetAutoplay
      rewind={false}
      swipeable
      containerClass="container-carousel"
      responsive={responsive}>
      {
        data.map((question) => {
          return (
            <div className="video-item" key={question.id} onClick={() => handleClick(question.id)}>
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
        })
      }
    </Carousel>
  )
}

export default VideoSlider
