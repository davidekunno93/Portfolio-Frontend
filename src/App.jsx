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
  const [count, setCount] = useState(0)
  
  const getWebApps = async () => {
    const resp = await axios.get("http://localhost:5000/api/mini-apps")
    return resp.data
  }
  
  const loadMiniApps = async () => {
    let data = await getMiniApps()
    setApp(data.data)
    console.log(data.data)
  }
  
  const [app, setApp] = useState(() => loadMiniApps())

  return (
    <>
    <Navbar app={app} setApp={setApp} />
    <Routes>
      <Route children path='/' element={<Home />} />
      <Route children path='/dashboard' element={<Home />} />
      <Route children path='/showpage' element={<ShowPage app={app} setApp={setApp} />} />
      <Route children path='/showpage2' element={<ShowPage2 app={app} setApp={setApp} />} />
      <Route children path='/showpage3' element={<ShowPage3 app={app} setApp={setApp} />} />
      <Route children path='/showpage4' element={<ShowPage4 app={app} setApp={setApp} />} />
      <Route children path='/web-pages' element={<WebPages />} />
      <Route children path='/mini-apps' element={<MiniApps app={app} setApp={setApp} />} />
      <Route children path='/terminal-games' element={<TerminalGames />} />
      <Route children path='/feedback-received' element={<FeedbackThanks />} />
    </Routes>
    
      <Footer />
    </>
  )
}

export default App
