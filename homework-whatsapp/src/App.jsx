import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatScreen from './Screens/ChatScreen'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ChatScreen/>}/>
        <Route path='/contact/:contact_id' element={<ChatScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
