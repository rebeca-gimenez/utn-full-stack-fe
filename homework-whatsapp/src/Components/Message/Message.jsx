import React from 'react'
import './message.css'
import { GoTriangleDown } from "react-icons/go"
import { BiCheckDouble } from "react-icons/bi"
import { BiCheck } from "react-icons/bi"
import { LuClock } from "react-icons/lu"
//<GoTriangleDown /> FOR THE FIRST MESSAGE OF THE USER

const Message = ({sender, text, hour, status}) => {

  return (
    <div className={'message' + ' ' + ( sender=="ME" ? 'sender-me green' : 'sender-contact' ) }>
        <span className='text-message'>{text}</span>
        <div className='text-data'>
          <span className='text-hour'>{hour}</span>
          <span className='message-icon'>
          {status==='viewed' && <BiCheckDouble className='icon-viewed'/>}
          {status==='not-viewed' && <BiCheckDouble/>}
          {status==='received' && <BiCheck/>}
          {status==='not-sent' && <LuClock/>}

          </span>
        </div>
    </div>
  )
}

export default Message