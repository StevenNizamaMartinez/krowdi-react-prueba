import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext';

import { responsive } from '../libs/slider';

import VideoPlayer from './VideoPlayer';
import Carousel from "react-multi-carousel";
import VideoItem from './VideoItem';

function VideoSlider() {
  const { data } = useAppContext();

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
            <VideoItem question={question} key={question.id} />
          )
        })
      }
    </Carousel>
  )
}

export default VideoSlider
