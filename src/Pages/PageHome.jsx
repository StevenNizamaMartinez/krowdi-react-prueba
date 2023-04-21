import React from 'react'
import { useAppContext } from '../Context/AppContext'

import VideoSlider from '../components/VideoSlider'
import VideoCard from '../components/VideoCard'

import { toast } from 'react-hot-toast'

function PageHome() {
  const { data, saveVideosCompleted } = useAppContext()

  const handleCompletedVideos = () => {
    saveVideosCompleted("data")
  }

  const handleIncompleteVideos = () => {
    toast.dismiss()
    toast.error('Debes grabar todos los videos')
  }

  return (
    <div className="App">
      <h1 className='home-title tracking-in-contract'>Video Cuestionario</h1>
      <VideoSlider/>
      <div className="home-description">
        {
          data.every(question => question.video !== "") ?
            <button onClick={handleCompletedVideos} className="btn btn-success">Enviar</button> :
            <button onClick={handleIncompleteVideos} className="btn btn-disabled shake-vertical">Completa todas las preguntas</button>
        }
      </div>
    </div>
  )
}

export default PageHome
