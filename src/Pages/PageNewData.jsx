import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { toast } from 'react-hot-toast'
import ButtonBack from '../components/ButtonBack'
import { useHandlerForm } from '../custom/useHandlerForm'

function PageNewData() {

  const { data } = useAppContext()
  const {
    handleInputId,
    handleChange,
    handleClick,
    handleNewData,
    show
  } = useHandlerForm()

  return (
    <div className="newData-container">
      <div className="title">
        <ButtonBack />
        <h2>Edita los datos del Cuestionario</h2>
      </div>
      <div className="newForm">
        <button onClick={handleClick} className='btn btn-black'>Añade una nueva pregunta</button>
        {
          show &&
          <form className='form-container' onSubmit={handleNewData}>
            <label htmlFor="newdata">Pregunta: </label>
            <input name='question' type="text" id='newdata' />
            <button className='btn btn-success'>Save</button>
          </form>
        }
      </div>
      <div className="form-container">
        {
          data?.sort((a, b) => a.id - b.id)
            .map((item) => {
              return (
                <form key={item.id} className='form-item'>
                  <label htmlFor={item.id}>
                    Pregunta {item.id}
                  </label>
                  <input
                    onClick={() => handleInputId(item.id)} type="text"
                    name='question'
                    value={item?.question}
                    id={item.id}
                    onChange={(e) => handleChange(e, item.id)} />
                </form>
              )
            })
        }
      </div>

    </div>
  )
}

export default PageNewData
