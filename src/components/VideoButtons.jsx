import React, { useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'

function VideoButtons() {
  const { data, saveVideosCompleted } = useAppContext()
  const { id } = useParams()
  const navigate = useNavigate()
  const len = useMemo(() => data.length, [data]);

  const handleNext = useCallback(() => {
    if (parseInt(id) === len) return navigate('/video/1')
    navigate(`/video/${parseInt(id) + 1}`)
  }, [id, len, navigate]);

  const handleBack = useCallback(() => {
    if (parseInt(id) === 1) return navigate(`/video/${len}`)
    navigate(`/video/${parseInt(id) - 1}`)
  }, [id, len, navigate]);

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
