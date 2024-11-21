import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ChatScreen.css'
import ContactsList from '../Components/ContactsList/ContactsList'
import MessagesList from '../Components/MessagesList/MessagesList'
import MessageInput from '../Components/MessageInput/MessageInput'
import ContactHeader from '../Components/ContactHeader/ContactHeader'
import contacts from '../data/contactsData'
import ChatNav from '../Components/ChatNav/ChatNav'
import Sidebar from '../Components/Sidebar/Sidebar'

const ChatScreen = () => {
  //Get contact ID
  const { contact_id } = useParams()

  //Find contact
  const contact = contacts.find(
    (contact) => {
      return contact.id === Number(contact_id)
    }
  ) 

  //Remember to add navigation

  const [chatMessages, setChatMessages] = useState(contact.messagesList)

  //Update chat messages
  useEffect( () => {
    setChatMessages(contact.messagesList)
    }, [contact])

  return (
    <div className='screen' >
      <Sidebar/>
      <ChatNav/>
      <div className='messages-screen'>
        <ContactHeader 
          contactAvatar={contact.avatar}
          contactName={contact.name}
          contactLastHour={contact.lastHour}
        />
        <MessagesList messages={chatMessages}/>
        <MessageInput messages={chatMessages} setMessages={setChatMessages}/>
      </div>
    </div>
  )
}

export default ChatScreen