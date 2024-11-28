import React from 'react'
import { FaCircleUser } from "react-icons/fa6"
import "./Contact.css"

const Contact = ({contactAvatar, contactName, lastHour, bottomText}) => {
  return (
    <div className="contact-box">
        <div className='contact-avatar'>
          {contactAvatar ? contactAvatar : <FaCircleUser className='contact-avatar-icon light-icon-1'/>}
        </div>
        <div className='contact-info'>
          <div className='contact-info-top'>
            <span className='contact-info-name'>{contactName}</span>
            {lastHour && <span className='contact-info-hour'>{lastHour}</span>}
          </div>
          <span className='contact-info-text'>{bottomText}</span>
        </div>
    </div>
  )
}

export default Contact