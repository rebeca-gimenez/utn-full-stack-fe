import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatScreen from './Screens/ChatScreen'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/contact/:contactID' element={<ChatScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
