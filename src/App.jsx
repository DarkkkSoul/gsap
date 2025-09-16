import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/contact-us" element={<Contact />} /> */}
    </Routes>
  )
}

export default App