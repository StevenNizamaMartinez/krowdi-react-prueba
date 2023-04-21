import React, { useCallback, useEffect, useState } from 'react'

import VideoButtons from '../components/VideoButtons'
import { useAppContext } from '../Context/AppContext'
import ButtonBack from '../components/ButtonBack'

import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'


import { FiRefreshCw } from 'react-icons/fi'
import VideoRtc from '../components/VideoRtc'
import Timing from '../components/Timing'

function PageVideo() {
  const { id } = useParams()
  const { data } = useAppContext()
  const [animate, setAnimate] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [status, setStatus] = useState();
  const [question, setQuestion] = useState(data?.find((question) => question?.id === parseInt(id)))

  useEffect(() => {
    setQuestion(data?.find((question) => question.id === parseInt(id)))
  }, [id])

  useEffect(()=>{
    setQuestion(data?.find((question) => question.id === parseInt(id)))
  },[data])

  useEffect(() => {
    // Para el temporizador
    let intervalId;
    if (status === 'recording') {
      intervalId = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [status]);

  useEffect(() => {
    //Verificar la duración del video
    const MAX_RECORDING_DURATION = 120
    if (recordingDuration > MAX_RECORDING_DURATION) {
      stop()
      toast.error('Recording time exceeded 2 minutes')
    }
  }, [recordingDuration])

  const restart = () => {
    setRecordingDuration(0)
    setQuestion((prev) => (
      { ...prev, video: "" }
    ))
  }
  const stop = () => {
    setRecordingDuration(0)
  }

  return (
    <div className='page-video-container blur-in-expand'>
      <ButtonBack />
      {
        question?.video !== "" ?
          (
            <div className='video-full-container blur-in-expand'>
              <video src={question?.video} autoPlay loop/>
              <p className='question'>{question.question}</p>
              <span className='btn-video btn-restart rotate-center-refressh' onClick={restart}><FiRefreshCw /></span>
            </div>
          )
          :
          (<div className='video-full-container'>
            <VideoRtc recordingDuration={recordingDuration} question={question} setStatus={setStatus} stop={stop} setAnimate={setAnimate}/>
            <Timing animate={animate} recordingDuration={recordingDuration}/>
          </div>)
      }
      <VideoButtons />
    </div >
  )
}

export default PageVideo
