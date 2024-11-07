import React from 'react'
import MessagesList from '../Components/MessagesList/MessagesList'
import './MessagesScreen.css'
const MessagesScreen = () => {
    //Possible states 'viewed', 'not-viewed', 'not-received'
    //Possible senders 'ME', 'USER'
    const messages = [
        {
            sender: 'ME',
            hour: '23:10',
            id: 1,
            text: 'Hola que tal?',
            status: 'viewed'
        },
        {
            emisor: 'USUARIO',
            hour: '23:11',
            id: 2,
            text: 'Si, hoy aprendi estados',
            status: 'viewed'
        },
        {
            sender: 'ME',
            hour: '23:12',
            id: 3,
            text: 'Eso que significa?',
            status: 'not-viewed'
        },
        {
            sender: 'ME',
            hour: '23:13',
            id: 4,
            text: 'Estas ahi?',
            status: 'not-received'
        },
    ]
    //if sender its 'ME' then class="right-aligned"
    //if sender its 'USER' then class="left-aligned"
    return (
        <div className='chat-screen'>
            <MessagesList messages={messages}/>
        </div>
    )
}

export default MessagesScreen