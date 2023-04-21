import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'

import VideoSlider from '../components/VideoSlider'

import { toast } from 'react-hot-toast'
import ButtonQuestion from '../components/ButtonQuestion'

function PageHome() {
  const { data, saveVideosCompleted } = useAppContext()
  const [counter, setCounter] = useState(data?.filter((item) => {
    item.video !== ""
    return item
  }))

  const handleCompletedVideos = () => {
    saveVideosCompleted("data")
  }

  const handleIncompleteVideos = () => {
    toast.dismiss()
    toast.error('Debes grabar todos los videos')
  }

  return (
    <div className="App">

      <h1 className='home-title tracking-in-contract'>
        <span><ButtonQuestion /></span>
        Video Cuestionario</h1>
      <VideoSlider />
      <div className="home-description">
        <h4>Completado {counter?.length} / {data.length}</h4>
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
