import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import ShowPage from './views/ShowPage'
import WebPages from './views/Webpages'
import MiniApps from './views/MiniApps'
import TerminalGames from './views/TerminalGames'
import FeedbackThanks from './views/FeedbackThanks'
import ShowPage2 from './views/ShowPage2'
import ShowPage3 from './views/ShowPage3'
import ShowPage4 from './views/ShowPage4'

function App() {
  
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route children path='/' element={<Home />} />
      <Route children path='/dashboard' element={<Home />} />
      <Route children path='/showpage' element={<ShowPage />} />
      <Route children path='/showpage2' element={<ShowPage2 />} />
      <Route children path='/showpage3' element={<ShowPage3 />} />
      <Route children path='/showpage4' element={<ShowPage4 />} />
      <Route children path='/web-pages' element={<WebPages />} />
      <Route children path='/mini-apps' element={<MiniApps />} />
      <Route children path='/terminal-games' element={<TerminalGames />} />
      <Route children path='/feedback-received' element={<FeedbackThanks />} />
    </Routes>
    
      <Footer />
    </>
  )
}

export default App
