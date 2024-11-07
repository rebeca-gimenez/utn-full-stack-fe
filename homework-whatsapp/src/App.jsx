import { useState } from 'react'
import ChatScreen from './Screens/ChatScreen'
import './App.css'
import screenshot from './assets/whatsapp-screenshot.png'

function App() {

  return (
    <>
      <div className='list'>
        <h1>Yo vs. screenshot</h1>
        <div className='comparison'>
          <div className='proposal'>
            <ChatScreen/>
          </div>
          <div className='screenshot'>
            <img className='screenshot' src={screenshot} alt='whatsapp screenshot'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
