import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Intro from './Components/Intro/Intro'
import Courses from './Components/Courses/Courses'
import Contact from './Components/Contact/Contact'
import History from './Components/History/History'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Courses />
      <Contact />
      <History />
      <Footer />
    </div>
  )
}

export default App