import React from 'react'
import './MessageInput.css'
import getNewMessageText from '../../helpers/getNewMessageText'
import getNewMessagetID from '../../helpers/getNewMessagetID'
import { getFormattedHour } from '../../helpers/getFormattedHour'
import { BiHappy } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSolidMicrophone } from "react-icons/bi"


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
                <BiHappy className='icon-1' />
                <AiOutlinePlus className='icon-2'/>
            </div>
            <div className='message-input-box'>
                <form onSubmit={handleSenderSendNewMessage}>
                    <label htmlFor="message">Type a message</label>
                    <input type="message" id='message' name='message'/>
                </form>
            </div>
            <BiSolidMicrophone className='icon-1' />
        </div>
    )
}

export default MessageInput