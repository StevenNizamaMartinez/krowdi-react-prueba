import React from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';
import { FaPlay, FaStop } from 'react-icons/fa';
import { useVideoRecorder } from '../custom/useVideoRecorder';

const VideoRtc = ({ setStatus, question, stop, setAnimate, recordingDuration }) => {
  const { id } = useParams()
  const { data, setData, saveVideoDb } = useAppContext()
  const {
    videoRef,
    recording,
    videoUrl,
    handleStartRecording,
    handleStopRecording
  } = useVideoRecorder({ setAnimate,recordingDuration, setStatus, stop, saveVideoDb})



  return (
    <div className='web-live-container'>
      {!videoUrl && <video className='web-live' ref={videoRef} autoPlay muted={true} />}
      {videoUrl !== null && (
        <video src={videoUrl} autoPlay controls onLoadedMetadata={() => {
          setData(data.map((item) => {
            if (item.id === parseInt(id)) {
              item.video = videoUrl
            }
            return item
          }))
        }} />
      )}
      {recording ? (
        <button className='btn-video' onClick={handleStopRecording}><FaStop /></button>
      ) : (
        <button className='btn-video' onClick={handleStartRecording}><FaPlay /></button>
      )}
      <p className='question'>
        <span className='question-bold'>N° {question?.id} </span>
        {question?.question}</p>

    </div>
  );
};

export default VideoRtc;
