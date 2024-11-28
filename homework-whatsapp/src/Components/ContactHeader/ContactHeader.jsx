import React from 'react'
import { SlMagnifier } from "react-icons/sl"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import './ContactHeader.css'
import Contact from '../Contact/Contact'

const ContactHeader = ({contactAvatar, contactName, contactLastHour}) => {
  let contactStatus = `Last seen today at ${contactLastHour}`

  return (
    <div className='contact-header-box'>
      <Contact
        contactAvatar={contactAvatar}
        contactName={contactName}
        contactLastHour={contactLastHour}
        bottomText={contactStatus}
      />
      <div className='contact-icons'>
        <button className='video-dropdown'>
          <FaVideo className='video-icon medium-icon-1'/>
          <IoIosArrowDown className='arrow-down-icon medium-icon-1'/>
        </button>
        <SlMagnifier className='search-icon icon-1'/>
        <BsThreeDotsVertical className='vertical-dots-icon icon-1'/>
      </div>
    </div>
  )
}

export default ContactHeader