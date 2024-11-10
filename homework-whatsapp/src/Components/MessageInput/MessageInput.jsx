import React from 'react'
import './MessageInput.css'
import getNewMessageText from '../../helpers/getNewMessageText'
import getNewMessagetID from '../../helpers/getNewMessagetID'
import { getFormattedHour } from '../../helpers/getFormattedHour'

const MessageInput = ({messages, setMessages}) => {
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

        console.log(new_message)
        console.log(typeof new_message)

    }
    return (
        <div className='message-input'>
            <div className='left-icons'>
                <i className="bi bi-emoji-smile"></i>
                <i className="bi bi-plus-lg"></i>
            </div>
            <div className='message-input-box'>
                <form onSubmit={handleSenderSendNewMessage}>
                    <label htmlFor="message">Type a message</label>
                    <input type="message" id='message' name='message'/>
                </form>
            </div>
            <i className="bi bi-mic-fill"></i>
        </div>
    )
}

export default MessageInput