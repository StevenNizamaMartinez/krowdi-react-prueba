import { useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { useVideoContext } from "../Context/VideoContext";

export function useVideoData() {
  const { id } = useParams()
  const { data, question, setQuestion } = useAppContext()
  const { recordingDuration, setRecordingDuration, status } = useVideoContext()

  useEffect(() => {
    setQuestion(data?.find((question) => question.id === parseInt(id)))
  }, [id, data])

  useEffect(() => {
    let intervalId;
    const RECORDING_INTERVAL_DURATION = 1000;
    if (status === 'recording') {
      intervalId = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, RECORDING_INTERVAL_DURATION);
    }
    return () => clearInterval(intervalId);
  }, [status, setRecordingDuration]);

  useEffect(() => {
    const MAX_RECORDING_DURATION = 120;
    if (recordingDuration === MAX_RECORDING_DURATION) {
      toast.error('Recording time exceeded 2 minutes')
    }
    if (recordingDuration > MAX_RECORDING_DURATION) {
      stop()
      toast.error('Recording time exceeded 2 minutes')
    }
  }, [recordingDuration, stop])

  const restart = useCallback(() => {
    setRecordingDuration(0)
    setQuestion((prev) => (
      { ...prev, video: "" }
    ))
  }, [setRecordingDuration, setQuestion])

  const stop = useCallback(() => {
    setRecordingDuration(0)
  }, [setRecordingDuration])

  return {
    restart,
    stop,
    question
  }

}
