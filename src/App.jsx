import { Route, Routes } from 'react-router-dom'
import PageHome from './Pages/PageHome'
import './App.css'
import PageVideo from './Pages/PageVideo'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import LoaderPage from './components/LoaderPage'
import PageNewData from './Pages/PageNewData'

function App() {
  const [loading, setLoading] = useState(false)

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    return <LoaderPage/>
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<PageHome/>}/>
      <Route path='/video/:id' element={<PageVideo/>}/>
      <Route path='/edit' element={<PageNewData/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
