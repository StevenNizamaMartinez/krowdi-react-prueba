import React from 'react'

import { useNavigate } from 'react-router-dom'
import { AiTwotoneEdit } from 'react-icons/ai'
import { toast } from 'react-hot-toast'

function ButtonQuestion() {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate("/edit")
    toast.success("Para recalcar solo los recluters podran editar esto, los postulantes no")
  }

  return (
    <button onClick={handleEdit} className='btn btn-primary'>
      <AiTwotoneEdit />
      Editar cuestionario
    </button>
  )
}

export default ButtonQuestion
