import { FiRefreshCw } from "react-icons/fi"
import VideoPlayer from "./VideoPlayer"
import { useVideoData } from "../custom/useVideoData"
import { useAppContext } from "../Context/AppContext"

function VideoCard() {
  const { question } = useAppContext()
  const {restart} = useVideoData()

  return (
    <div className='video-full-container'>
      <VideoPlayer url={question?.video} controls={true} />
      <p className='question'>{question.question}</p>
      <span className='btn-video btn-restart rotate-center-refressh' onClick={restart}><FiRefreshCw /></span>
    </div>
  )
}

export default VideoCard
