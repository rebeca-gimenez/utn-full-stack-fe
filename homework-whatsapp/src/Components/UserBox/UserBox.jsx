import React from 'react'
import { SlMagnifier } from "react-icons/sl"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { FaCircleUser } from "react-icons/fa6"
import './UserBox.css'

const User = ({userName, userStatus, userAvatar}) => {
  return (
    <div className='user-box'>
      <div className='user-info'>
        <div>
          {userAvatar ? userAvatar : <FaCircleUser className='light-icon-1'/>}
        </div>
        <div>
          <span className='user-name'>{userName}</span>
          <span>{userStatus}</span>
        </div>
      </div>
      <div className='user-icons'>
        <div className='video-dropdown'>
          <FaVideo className='medium-icon-1'/>
          <IoIosArrowDown className='medium-icon-1'/>
        </div>
        <SlMagnifier className='icon-1'/>
        <BsThreeDotsVertical className='icon-1'/>
      </div>
    </div>
  )
}

export default User