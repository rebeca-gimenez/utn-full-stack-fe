import React from 'react'
import { GoTriangleDown } from "react-icons/go";
//<GoTriangleDown /> FOR THE FIRST MESSAGE OF THE USER

const Message = ({sender, text, hour}) => {
  return (
    <div className={'message' + ' ' + ( sender=="ME" ? 'sender-me' : 'sender-user' ) }>
        <span className='text-message'>{text}</span>
        <div className='text-data'>
          <span className='text-hour'>{hour}</span>
        </div>
    </div>
  )
}

export default Message