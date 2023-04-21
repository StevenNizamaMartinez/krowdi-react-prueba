import { Route, Routes } from 'react-router-dom'
import PageHome from './Pages/PageHome'
import './App.css'
import PageVideo from './Pages/PageVideo'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<PageHome/>}/>
      <Route path='/video/:id' element={<PageVideo/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
