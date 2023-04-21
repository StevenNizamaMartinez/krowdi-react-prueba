import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/AppContext';

import { responsive } from '../libs/slider';
import LoaderSkeleton from '../components/LoaderSkeleton'

import Carousel from "react-multi-carousel";
import VideoItem from './VideoItem';

function VideoSlider() {
  const { data } = useAppContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 500)

  return (
    <Carousel
      infinite
      shouldResetAutoplay
      rewind={false}
      swipeable
      containerClass="container-carousel"
      responsive={responsive}>
      {
        loading ?
          data.map((question) => {
            return (
              <div className="video-item skeleton" key={question.id}  >
                <LoaderSkeleton />
              </div>
            )
          }) :
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
