import { useState } from 'react'
import ChatScreen from './Screens/ChatScreen'
import './App.css'
import screenshot from './assets/whatsapp-screenshot.png'

function App() {
  const users = [
    {
      id: 0,
      name: 'Steven',
      lastHour: '23:10',
      lastMessage: 'Hola que tal?',
      lastSender: 'ME',
      lastStatus: 'viewed',
      messagesList: [
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 0,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 1,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 2,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 3,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 4,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 5,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 6,
          text: '.',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:26 PM',
          id: 7,
          text: 'Hola que tal?',
          status: 'viewed'
        },
        {
          emisor: 'USER',
          hour: '4:26 PM',
          id: 8,
          text: 'Si, hoy aprendi estados',
          status: 'viewed'
        },
        {
          sender: 'ME',
          hour: '4:26 PM',
          id: 9,
          text: 'Eso que significa?',
          status: 'not-viewed'
        },
        {
          sender: 'ME',
          hour: '4:27 PM',
          id: 10,
          text: 'Estas ahi?',
          status: 'received'
        },
      ]
    },
    {
      id: 2,
      name: 'Melanie',
      lastHour: '23:10',
      lastMessage: 'Hola que tal?',
      lastSender: 'ME',
      lastStatus: 'viewed',
      messagesList: [
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 0,
          text: '.',
          status: 'viewed'
        }
      ]
    },
    {
      id: 3,
      name: 'Camila',
      lastHour: '23:10',
      lastMessage: 'Hola que tal?',
      lastSender: 'ME',
      lastStatus: 'viewed',
      messagesList: [
        {
          sender: 'ME',
          hour: '4:25 PM',
          id: 0,
          text: '.',
          status: 'viewed'
        }
      ]
    }
  ]
    const messagesList = [
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 0,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 1,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 2,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 3,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 4,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 5,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:25 PM',
        id: 6,
        text: '.',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:26 PM',
        id: 7,
        text: 'Hola que tal?',
        status: 'viewed'
      },
      {
        emisor: 'USER',
        hour: '4:26 PM',
        id: 8,
        text: 'Si, hoy aprendi estados',
        status: 'viewed'
      },
      {
        sender: 'ME',
        hour: '4:26 PM',
        id: 9,
        text: 'Eso que significa?',
        status: 'not-viewed'
      },
      {
        sender: 'ME',
        hour: '4:27 PM',
        id: 10,
        text: 'Estas ahi?',
        status: 'received'
      },
    ]

  return (
    <>
      <div className='list'>
        <h1>Yo vs. screenshot</h1>
        <div className='comparison'>
          <div className='proposal'>
            <ChatScreen messagesList={messagesList}/>
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
