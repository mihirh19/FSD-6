
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Indstu from './components/Indstu'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/student' Component={Student} />
          <Route path='/student/:id' Component={Indstu} />
          <Route path='/teacher' Component={Teacher} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
