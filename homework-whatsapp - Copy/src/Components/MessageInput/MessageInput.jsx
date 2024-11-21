import React, { useState } from 'react'
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
                </span>
                <span className='button-icon'>
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
                    </button>
                }
            </form>

            {isInputEmpty && 
                <span className='button-icon'>
                </span>
            }

        </div>
    )
}

export default MessageInput