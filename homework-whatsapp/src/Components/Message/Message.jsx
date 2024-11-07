import React from 'react'
import './message.css'
import getClass from '../../helpers/getClass'

const Message = ({id, sender, text, hour, status}) => {
  return (
    <div className={'message' + ' ' + ( sender=="ME" ? 'sender-me' : 'sender-user' ) }>
        <span className='text-message'>{text}</span>
        <div className='text-data'>
          <span className='text-hour'>{hour}</span>
          <i className={'text-icon ' + getClass(status) + ' ' + ( sender=="ME" ? 'sender-me' : 'sender-user' )}></i>
        </div>
    </div>
  )
}

export default Message