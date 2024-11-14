import React from 'react'
import User from '../User/User'
import "./UsersList.css"

const UsersList = ({users}) => {
    //<Link to={'contact/'+user.id}>Dummy</Link>
    let usersListJSX = users.map(
        ( user )=>{
            return <User 
                userID={user.id} 
                userName={user.name}
                lastHour={user.lastHour}
                lastMessage={user.lastMessage} 
                lastSender={user.lastSender}
                lastStatus={user.lastStatus}
                key={user.id}
                />
        }
    )
    return (
        <div className='users-list'>
            {usersListJSX}
        </div>
    )
}

export default UsersList