import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import contacts from '../data/usersData'
import { Link } from "react-router-dom"
import { FaCircleUser } from "react-icons/fa6"
import Message from "../Components/Message/Message"
import "./ChatScreen.css"
import getNewMessageText from '../helpers/getNewMessageText'
import getNewMessagetID from '../helpers/getNewMessagetID'
import { getFormattedHour } from '../helpers/getFormattedHour'

const ChatScreen = () => {

  return (
    <div className='screen' >
      <ContactsList/>
      <div className='messages-screen'>
        <MessagesScreen/>
      </div>
    </div>
  )
}

export default ChatScreen

const ContactsList = () => {
  return (
    <div>
      <h1>Chats</h1>
      <ul>
        {contacts.map((contact)=>{
          return (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
            <Contact 
              contactName={contact.name} 
              key={contact.id}
            />
            </Link>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

const ContactHeader = ({aContact}) => {
  return (
    <div>
      <Contact
        contactAvatar={aContact.avatar}
        contactName={aContact.name}
        key={aContact.id}
      />
    </div>
  )
}

const Contact = ({contactAvatar, contactName}) => {
  return (
    <div className='user-info-box'>
        <div className='user-avatar'>
          {contactAvatar ? contactAvatar : <FaCircleUser className='user-avatar-icon light-icon-1'/>}
        </div>
        <div className='user-info'>
          <span className='user-info-name'>{contactName}</span>
        </div>
    </div>
  )
}

const MessagesScreen = () => {
  //This component is what is going to change
  const { contactID } = useParams()

  const contact = contacts.find(
    (contact) => {
      return contact.id === Number(contactID)
    }
  )

  return (
    <div>
        <ContactHeader aContact={contact}/>
        <MessagesList aContact={contact}/>
    </div>
  )
}


const MessagesList = ({aContact}) => {
  
  const [messages, setMessages] = useState(aContact.messagesList)

  useEffect( () => {
    setMessages(aContact.messagesList)
  }, [aContact])

  //Handler for the sender to submit a message
  const handleSenderSendNewMessage = (event) => {

    event.preventDefault()

    const messages_jsx = event.target
    const new_text_message = getNewMessageText(messages_jsx)
    const id = getNewMessagetID(messages)

    const new_message = {
        sender: 'ME',
        hour: getFormattedHour(),
        id: id,
        text: new_text_message,
        status: 'received'
    }

    setMessages(
        (prevMessagesState) => {
            return [...prevMessagesState, new_message]
        }
    )


}
    
  return (
    <div className='messages-list'>
      {messages.map((message)=>{
      return (
      <Message 
        sender={message.sender}
        text={message.text} 
        hour={message.hour}
        key={message.id}
      />)
    })}
      <div className='message-box'>
        <form onSubmit={handleSenderSendNewMessage} className='message-form'>
            <input type="message" id='message' name='message'/>
            <label htmlFor="message" className='message-input-label'>
              Type a message
            </label>
        </form>
      </div>
    </div>
  )
}


