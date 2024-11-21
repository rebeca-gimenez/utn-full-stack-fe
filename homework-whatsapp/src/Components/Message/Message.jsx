import React from 'react'
import './message.css'
import MessageIcon from './MessageIcon'
import { GoTriangleDown } from "react-icons/go";
//<GoTriangleDown /> FOR THE FIRST MESSAGE OF THE USER

const Message = ({sender, text, hour, status}) => {

  return (
    <div className={'message' + ' ' + ( sender=="ME" ? 'sender-me' : 'sender-contact' ) }>
        <span className='text-message'>{text}</span>
        <div className='text-data'>
          <span className='text-hour'>{hour}</span>
          {status=='viewed' && <BiCheckDouble />}
          {status=='not-viewed' && <BiCheckDouble />}
          {status=='received' && <LuClock />}
        </div>
    </div>
  )
}

export default Message