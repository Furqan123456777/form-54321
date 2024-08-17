import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Createuser from './Createuser'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createuser" element={<Createuser />} />
    </Routes>
  )
}

export default App