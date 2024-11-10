import React from 'react'
import MessagesList from '../Components/MessagesList/MessagesList'
import './MessagesScreen.css'
const MessagesScreen = ({messageList}) => {
    //Possible states 'viewed', 'not-viewed', 'not-received'
    //Possible senders 'ME', 'USER'
    //if sender its 'ME' then class="right-aligned"
    //if sender its 'USER' then class="left-aligned"
    //console.log(messages)
    return (
        <div className='chat-screen'>
            <MessagesList messages={messageList}/>
        </div>
    )
}

export default MessagesScreen