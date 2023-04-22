import { FiRefreshCw } from "react-icons/fi"
import VideoPlayer from "./VideoPlayer"
import { useVideoData } from "../custom/useVideoData"
import { useAppContext } from "../Context/AppContext"
import { useState } from "react"

function VideoCard() {
  const { question } = useAppContext()
  const { restart } = useVideoData()
  const [showDescription, setShowDescription] = useState(false);


  return (
    <div className='video-full-container'>
      <VideoPlayer url={question?.video} controls={true} />
      <p className='question'>{question.question}</p>
        <span
          onMouseOver={() => { setShowDescription(true) }}
          onMouseOut={() => { setShowDescription(false) }}
          className='btn-video btn-restart rotate-center-refressh'>
          <FiRefreshCw />
          </span>
        
          {showDescription && <div className="btn-description slide-right">Haz click para regrabar el video</div>}

    </div>
  )
}

export default VideoCard
