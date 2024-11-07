import React from 'react'
import User from '../User/User'

const UsersList = (users) => {
    let usersListJSX = users.map(
        ( user )=>{
            return <User 
                id={user.id} 
                name={user.name}
                hour={user.lastHour}
                text={user.lastMessage} 
                sender={user.lastSender}
                status={user.lastStatus}
                key={user.id}
            />
        }
    )
    return (
        <div>
            {usersListJSX}
        </div>
    )
}

export default UsersList