import { FiRefreshCw } from "react-icons/fi"
import VideoPlayer from "./VideoPlayer"

function VideoCard({ question,restart }) {

  return (
    <div className='video-full-container'>
      <VideoPlayer url={question?.video} controls={true} />
      <p className='question'>{question.question}</p>
      <span className='btn-video btn-restart rotate-center-refressh' onClick={restart}><FiRefreshCw /></span>
    </div>
  )
}

export default VideoCard
