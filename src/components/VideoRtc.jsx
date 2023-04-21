import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';
import { FaPlay, FaStop } from 'react-icons/fa';

const VideoRtc = ({ setStatus, question, stop, setAnimate, recordingDuration }) => {
  const { id } = useParams()
  const { data, setData, saveVideoDb } = useAppContext()
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    setAnimate(false)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        const videoElement = videoRef.current;
        videoElement.srcObject = stream;
        const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
        mediaRecorder.ondataavailable = function (e) {
          setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
        };
        mediaRecorder.onstop = function () {
          const recordedBlob = new Blob(recordedChunks.slice(), { type: 'video/webm' });
          const videoUrl = URL.createObjectURL(recordedBlob);
        };
        setMediaRecorder(mediaRecorder);
      })
      .catch((error) => {
        console.error('Error accessing media devices.', error);
      });
  }, []);

  useEffect(() => {
    if (recordedChunks?.length > 0) {
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(recordedBlob);
      setVideoUrl(videoUrl);
    }
  }, [recordedChunks]);

  const handleStartRecording = () => {
    setAnimate(true)
    setStatus("recording")
    setVideoUrl(null);
    const mediaRecorder = new MediaRecorder(videoRef.current.srcObject, { mimeType: 'video/webm' });
    mediaRecorder.ondataavailable = function (e) {
      setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
    };
    mediaRecorder.onstop = function () {
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(recordedBlob);
      setVideoUrl(videoUrl);
    };
    setMediaRecorder(mediaRecorder);
    mediaRecorder.start();
    setRecording(true);
  };

  const handleStopRecording = async () => {
    stop()
    setRecording(!recording);
    setStatus("stop")
    mediaRecorder.stop();
    saveVideoDb("id","video")
    console.log(recordingDuration);
  };

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
