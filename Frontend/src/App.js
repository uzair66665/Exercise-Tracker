import React from 'react'
import About from './Components/About'
import AddActivity from './Components/AddActivity'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Offers from './Components/Offers'
import ShowActivity from './Components/ShowActivity'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddActivity/>}/>
          <Route path='/show' element={<ShowActivity/>}/>
        </Routes>
        <Offers/>
        <About/>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App