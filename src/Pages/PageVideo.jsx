import React from 'react'

import VideoButtons from '../components/VideoButtons'
import ButtonBack from '../components/ButtonBack'

import VideoRtc from '../components/VideoRtc'
import Timing from '../components/Timing'
import VideoCard from '../components/VideoCard'
import { useVideoData } from '../custom/useVideoData'

function PageVideo() {
  const {
    question,
    animate,
    recordingDuration,
    restart,
    stop,
    setAnimate,
    setStatus
  } = useVideoData()

  return (
    <div className='page-video-container blur-in-expand'>
      <ButtonBack />
      {
        question?.video !== "" ?
          <VideoCard question={question} restart={restart} />
          :
          <div className='video-full-container'>
            <VideoRtc recordingDuration={recordingDuration} question={question} setStatus={setStatus} stop={stop} setAnimate={setAnimate} />
            <Timing animate={animate} recordingDuration={recordingDuration} />
          </div>
      }
      <VideoButtons />
    </div >
  )
}

export default PageVideo
