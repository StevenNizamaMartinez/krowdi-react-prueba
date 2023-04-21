import React from 'react'
import { PacmanLoader } from 'react-spinners'

function LoaderPage() {
  return (
    <div className='loader'>
      <PacmanLoader
        size={50}
        color={' #f18e5c'}
      />
    </div>
  )
}

export default LoaderPage
