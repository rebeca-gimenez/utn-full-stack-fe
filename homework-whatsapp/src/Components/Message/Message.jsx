import React from 'react'
import './message.css'
import MessageIcon from './MessageIcon'
import { GoTriangleDown } from "react-icons/go";
//<GoTriangleDown /> FOR THE FIRST MESSAGE OF THE USER

const Message = ({id, sender, text, hour, status}) => {
  return (
    <div className={'message' + ' ' + ( sender=="ME" ? 'sender-me' : 'sender-user' ) }>
        <span className='text-message'>{text}</span>
        <div className='text-data'>
          <span className='text-hour'>{hour}</span>
          <MessageIcon status={status}/>
        </div>
    </div>
  )
}

export default Message