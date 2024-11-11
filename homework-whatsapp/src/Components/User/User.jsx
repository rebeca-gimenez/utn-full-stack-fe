import React from 'react'
import { SlMagnifier } from "react-icons/sl"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { FaCircleUser } from "react-icons/fa6"
import './User.css'

const User = ({userName, userStatus, userAvatar}) => {
  return (
    <div className='user-box'>
      <div>
        {userAvatar ? userAvatar : <FaCircleUser />}
      </div>
      <div>
        <span>{userName}</span>
        <span>{userStatus}</span>
      </div>
      <div className='user-icons'>
        <div>
          <FaVideo />
          <IoIosArrowDown />
        </div>
        <SlMagnifier className='icon-1'/>
        <BsThreeDotsVertical className='icon-1'/>
      </div>
    </div>
  )
}

export default User