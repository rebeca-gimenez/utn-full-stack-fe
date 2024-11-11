import React, { useState } from 'react'
import MessagesList from '../Components/MessagesList/MessagesList'
import './ChatScreen.css'
import MessageInput from '../Components/MessageInput/MessageInput'
import User from '../Components/User/User'

const ChatScreen = ({messagesList}) => {
    const [messages, setMessages] = useState(messagesList)
  return (
    <div>
      <User userName={'Steven'} userStatus={false}/>
      <div className='chat-screen'>
            <MessagesList messages={messages}/>
      </div>
      <MessageInput messages={messages} setMessages={setMessages}/>
    </div>
  )
}

export default ChatScreen