import React, { useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'
import {useButtonPage} from '../custom/useButtonPage'

function VideoButtons() {
  const {data} = useAppContext()
  const {handleNext, handleBack} = useButtonPage()

  const handleSave = () => {
    saveVideosCompleted("los videos o los enlaces de los videos")
  }

  return (
    <div className="buttons">
      <button className='btn btn-primary' onClick={handleBack}>
        Atras
      </button>
      {
        data.every(question => question?.video !== "") ?
          (
          <button onClick={handleSave} className='btn btn-success'>Enviar</button>
          ) :
          (
          <button onClick={handleNext} className='btn btn-primary'>Siguiente</button> )
      }

    </div>
  )
}

export default VideoButtons
