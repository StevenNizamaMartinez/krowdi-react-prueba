import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { useVideoContext } from "../Context/VideoContext";

export function useVideoData() {
  const { id } = useParams()
  const {data} = useAppContext()
  const { animate, setAnimate, recordingDuration, setRecordingDuration, status, setStatus, question, setQuestion } = useVideoContext()

  useEffect(() => {
    setQuestion(data?.find((question) => question.id === parseInt(id)))
    setQuestion(data?.find((question) => question.id === parseInt(id)))
  }, [id, data])

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
    const MAX_RECORDING_DURATION = 2 * 60; // 2 minutos
    if (recordingDuration === MAX_RECORDING_DURATION) {
      toast.error('Recording time exceeded 2 minutes')
    }
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

  return {
    animate,
    setAnimate,
    recordingDuration,
    setRecordingDuration,
    status,
    setStatus,
    question,
    setQuestion,
    restart,
    stop,
    question
  }

}
