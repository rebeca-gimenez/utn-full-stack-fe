import React from 'react'
import User from '../User/User'
import "./UsersList.css"
import { Link } from "react-router-dom"

const UsersList = ({users}) => {
    let usersListJSX = users.map(
        ( user )=>{
            return <Link to={`/contact/${user.id}`}>
            <User 
                userID={user.id} 
                userName={user.name}
                lastHour={user.lastHour}
                lastMessage={user.lastMessage} 
                lastSender={user.lastSender}
                lastStatus={user.lastStatus}
                key={user.id}
                />
            </Link>
        }
    )
    return (
        <div className='users-list'>
            {usersListJSX}
        </div>
    )
}

export default UsersList