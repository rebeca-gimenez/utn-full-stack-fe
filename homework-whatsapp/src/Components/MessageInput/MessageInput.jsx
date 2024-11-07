import React from 'react'
import './MessageInput.css'

const MessageInput = () => {
    //Handler for the sender to submit a message
    const handleSenderMessageSubmit = () => {

    }
    return (
        <div className='message-input'>
            <div className='left-icons'>
                <i className="bi bi-emoji-smile"></i>
                <i className="bi bi-plus-lg"></i>
            </div>
            <div className='message-input-box'>
                <form onSubmit={handleSenderMessageSubmit}>
                    <label htmlFor="message">Type a message</label>
                    <input type="message" id='message' name='message'/>
                </form>
            </div>
            <i className="bi bi-mic-fill"></i>
        </div>
    )
}

export default MessageInput