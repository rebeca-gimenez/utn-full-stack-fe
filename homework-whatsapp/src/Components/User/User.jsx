import React from 'react'
import { FaCircleUser } from "react-icons/fa6"
import "./User.css"

const User = ({userAvatar, userName, lastHour, bottomText,userID}) => {
  return (
    <div className='user-info-box'>
        <div className='user-avatar'>
          {userAvatar ? userAvatar : <FaCircleUser className='user-avatar-icon light-icon-1'/>}
        </div>
        <div className='user-info'>
          <div>
            <span className='user-info-name'>{userName}</span>
            {lastHour && <span>{lastHour}</span>}
          </div>
          <span className='user-info-text'>{bottomText}</span>
        </div>
    </div>
  )
}

export default User