import { createContext, useContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

  const [animate, setAnimate] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [status, setStatus] = useState();
  const [question, setQuestion] = useState({})

  return (
    <VideoContext.Provider value={{ animate, setAnimate, recordingDuration, setRecordingDuration, status, setStatus, question, setQuestion }}>
      {children}
    </VideoContext.Provider>)
}

export const useVideoContext = () => {
  return useContext(VideoContext);
}
