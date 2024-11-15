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
      <div className='user-info-box'>
        <div className='user-avatar'>
          {userAvatar ? userAvatar : <FaCircleUser className='user-avatar-icon light-icon-1'/>}
        </div>
        <div className='user-info'>
          <span className='user--info-name'>{userName}</span>
          <span className='user-info-status'>{userStatus}</span>
        </div>
      </div>
      <div className='user-icons'>
        <div className='video-dropdown'>
          <FaVideo className='video-icon medium-icon-1'/>
          <IoIosArrowDown className='arrow-down-icon medium-icon-1'/>
        </div>
        <SlMagnifier className='search-icon icon-1'/>
        <BsThreeDotsVertical className='vertical-dots-icon icon-1'/>
      </div>
    </div>
  )
}

export default User