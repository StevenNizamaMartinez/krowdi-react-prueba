import React from 'react'

import { formatSeconds } from '../libs/format'
import { AiFillHeart } from 'react-icons/ai'
import { useVideoContext } from '../Context/VideoContext'

function Timing() {
  const {animate,recordingDuration} = useVideoContext()
  return (
    <span className='time-video'>
      {formatSeconds(recordingDuration)} / 2:00
      <span className={
        animate ? 'heart heart-beat' : ' heart'
      }>
        <AiFillHeart />
      </span>

    </span>
  )
}

export default Timing
