import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ChatScreen.css'
import ContactsList from '../Components/ContactsList/ContactsList'
import contacts from '../data/contactsData'
import ChatNav from '../Components/ChatNav/ChatNav'
import Sidebar from '../Components/Sidebar/Sidebar'
import Chat from '../Components/Chat/Chat'

const ChatScreen = () => {
  /*
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
*/
  return (
    <div className='screen' >
      <Sidebar/>
      <ChatNav/>
      <Chat/>
    </div>
  )
}

export default ChatScreen