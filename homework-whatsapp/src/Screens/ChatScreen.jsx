import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ChatScreen.css'
import UsersList from '../Components/UsersList/UsersList'
import MessagesList from '../Components/MessagesList/MessagesList'
import MessageInput from '../Components/MessageInput/MessageInput'
import UserBox from '../Components/UserBox/UserBox'
import usersData from '../data/usersData'
import { BiCommentAdd } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"

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
      <div className='users-list'>
            <div>
                <h1>Chats</h1>
                <BiCommentAdd />
                <BsThreeDotsVertical />
            </div>
            <div>
                <span>Search</span>
                <div>
                    <span>All</span>
                    <span>Unread</span>
                    <span>Favorites</span>
                    <span>Groups</span>
                </div>
            </div>
            <div>
                <UsersList users={usersData}/>
            </div>
            <div>
                <span>Get WhatsApp for Windows</span>
            </div>
        </div>
        <div className='messages-screen'>
          <UserBox userName={currentUser.name} userStatus={false}/>
          <MessagesList messages={textMessages}/>
          <MessageInput messages={textMessages} setMessages={setTextMessages}/>
        </div>
    </div>
  )
}

export default ChatScreen