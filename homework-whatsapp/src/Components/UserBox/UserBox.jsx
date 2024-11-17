import React from 'react'
import { SlMagnifier } from "react-icons/sl"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { FaCircleUser } from "react-icons/fa6"
import './UserBox.css'
import User from '../User/User'

const UserBox = ({userAvatar, userName, userOnline, userLastHour}) => {
  let userTextDescription = `Last seen today at ${userLastHour}`
  if (userOnline == true) {
    userTextDescription = "Online"
  }

  return (
    <div className='user-box'>
      <User
        userAvatar={userAvatar}
        userName={userName}
        lastHour={false}
        bottomText={userTextDescription}
      />
      <div className='user-icons'>
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

export default UserBox