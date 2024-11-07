import React from 'react'
import './index.css'

function App() {
  const directMessages = [
    {
        name: 'Adrian Mogus',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVD3GPV2-4c4cd3e0784e-192',
        status: false
    },
    {
        name: 'Angela',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07Q3A53DMH-f410e4731970-192',
        status: true
    },
    {
        name: 'Candia',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07Q3A53DMH-f410e4731970-192',
        status: false
    },
    {
        name: 'Claudia Varela',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07Q3A53DMH-f410e4731970-192',
        status: false
    },
    {
        name: 'Gabriel Casabona',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07Q3A53DMH-f410e4731970-192',
        status: false
    }
  ]

  const directMessagesJSXList = directMessages.map(
    (directMessages) => {
      return (
        <div class="user">
          <div class="user-icon">
            <img class="avatar" src={directMessages.avatar} alt={directMessages.name} />
            <div class="circle"></div>
          </div>
          <span class="user-name">{directMessages.name}</span>
        </div>
      )
    }

  )

  return (
    <div>
        <h1>Hola</h1>
        {directMessagesJSXList}
    </div>
  )
}

export default App
