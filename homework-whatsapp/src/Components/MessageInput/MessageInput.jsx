import React, { useState } from 'react'
import './MessageInput.css'
import getNewMessageText from '../../helpers/getNewMessageText'
import getNewMessagetID from '../../helpers/getNewMessagetID'
import { getFormattedHour } from '../../helpers/getFormattedHour'
import { BiHappy } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSolidMicrophone } from "react-icons/bi"
import { IoPaperPlaneSharp } from "react-icons/io5"


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

    //State to hide the microphone button when typing
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputTextChange = (event) => {

        event.preventDefault()

        setIsInputEmpty(event.target.value === "")
    }

    return (
        <div className='message-box'>

            <div className='left-icons'>
                <span className='button-icon'>
                    <BiHappy className='icon-1' />
                </span>
                <span className='button-icon'>
                    <AiOutlinePlus className='icon-2'/>
                </span>
            </div>

            <form onSubmit={handleSenderSendNewMessage} className='message-form'>
                <input type="message" id='message' name='message' onChange={handleInputTextChange}/>
                {isInputEmpty &&
                    <label htmlFor="message" className='message-input-label'>
                        Type a message
                    </label>
                }
                {!isInputEmpty &&
                    <button type="submit" className='message-icon button-icon icon-1'>
                        <IoPaperPlaneSharp />
                    </button>
                }
            </form>

            {isInputEmpty && 
                <span className='button-icon'>
                    <BiSolidMicrophone className='microphone-icon icon-1' />
                </span>
            }

        </div>
    )
}

export default MessageInput