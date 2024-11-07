import React from 'react'
import MessagesList from '../Components/MessagesList/MessagesList'
import './MessagesScreen.css'
const MessagesScreen = () => {
    //Possible states 'viewed', 'not-viewed', 'not-received'
    //Possible senders 'ME', 'USER'
    const messages = [
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
            hour: '4:25 PM',
            id: 7,
            text: '.',
            status: 'viewed'
        },
        {
            sender: 'ME',
            hour: '4:26 PM',
            id: 8,
            text: 'Hola que tal?',
            status: 'viewed'
        },
        {
            emisor: 'USER',
            hour: '4:26 PM',
            id: 9,
            text: 'Si, hoy aprendi estados',
            status: 'viewed'
        },
        {
            sender: 'ME',
            hour: '4:26 PM',
            id: 10,
            text: 'Eso que significa?',
            status: 'not-viewed'
        },
        {
            sender: 'ME',
            hour: '4:27 PM',
            id: 11,
            text: 'Estas ahi?',
            status: 'received'
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