import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ChatScreen.css'
import UsersList from '../Components/UsersList/UsersList'
import MessagesList from '../Components/MessagesList/MessagesList'
import MessageInput from '../Components/MessageInput/MessageInput'
import UserBox from '../Components/UserBox/UserBox'
import usersData from '../data/usersData'
import ChatNav from '../Components/ChatNav/ChatNav'
import Sidebar from '../Components/Sidebar/Sidebar'

const ChatScreen = () => {
  const {contact_id} = useParams()

  const firstChatUser = usersData.find(
    (user) => {
      return user.id == 1
    }
  )
  const currentChatUser = usersData.find(
    (user) => {
      return user.id == contact_id
    }
  ) 
  const currentUser = currentChatUser ? currentChatUser : firstChatUser

  const [textMessages, setTextMessages] = useState(firstChatUser.messagesList)
  return (
    <div className='screen' >
      <Sidebar/>
      <ChatNav usersData={usersData}/>
      <div className='messages-screen'>
        <UserBox userName={currentUser.name} />
        <MessagesList messages={textMessages}/>
        <MessageInput messages={textMessages} setMessages={setTextMessages}/>
      </div>
    </div>
  )
}

export default ChatScreen