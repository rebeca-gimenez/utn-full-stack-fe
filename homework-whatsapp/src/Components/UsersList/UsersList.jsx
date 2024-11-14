import React from 'react'
import User from '../User/User'

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
        <div>
            {usersListJSX}
        </div>
    )
}

export default UsersList