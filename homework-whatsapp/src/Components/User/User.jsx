import React from 'react'
import { Link } from "react-router-dom"

const User = ({userName, lastHour, lastMessage, userAvatar,lastSender,userID}) => {
  return (
    <div>
        <Link to={`/contact/${userID}`}>
            <div>{userAvatar}</div>
            <div>
                <div>
                    <span>{userName}</span>
                    <span>{lastHour}</span>
                </div>
                <div>
                    <span>{lastSender}</span>
                    <span>{lastMessage}</span>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default User