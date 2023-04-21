import React from 'react'

import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function ButtonBack() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }

  return (
    <button onClick={handleBack} className='btn btn-primary'>
      <AiOutlineArrowLeft />
      Volver
    </button>
  )
}

export default ButtonBack
