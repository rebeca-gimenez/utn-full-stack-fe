import React from 'react'
import MessagesScreen from './MessagesScreen'
import MessageInput from '../Components/MessageInput/MessageInput'

const ChatScreen = () => {
  const users = [
    {
      id: 1,
      name: 'Steven',
      lastHour: '23:10',
      lastMessage: 'Hola que tal?',
      lastSender: 'ME',
      lastStatus: 'viewed'
    },
    {
      id: 2,
      name: 'Melanie',
      lastHour: '23:10',
      lastMessage: 'Hola que tal?',
      lastSender: 'ME',
      lastStatus: 'viewed'
    },
    {
      id: 3,
      name: 'Camila',
      lastHour: '23:10',
      lastMessage: 'Hola que tal?',
      lastSender: 'ME',
      lastStatus: 'viewed'
    }
  ]
  return (
    <div>
      <MessagesScreen/>
      <MessageInput/>
    </div>
  )
}

export default ChatScreen