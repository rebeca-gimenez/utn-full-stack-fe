import React from 'react'
import { BiCommentAdd } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import UsersList from '../UsersList/UsersList'
import "./ChatNav.css"
import { FaWhatsapp } from "react-icons/fa";

const ChatNav = ({usersData}) => {
    return (
        <div className='chat-nav'>
            <div className='chat-nav-header'>
                <div className='chat-header'>
                    <h1>Chats</h1>
                    <span className='chat-icons'>
                        <BiCommentAdd className='new-chat-icon icon-1'/>
                        <BsThreeDotsVertical className='vertical-dots-icon icon-1'/>
                    </span>
                </div>
                <div className='chat-search'>
                    <span className='search-bar'>Search</span>
                    <div className='search-categories'>
                        <span className='pill'>All</span>
                        <span className='pill'>Unread</span>
                        <span className='pill'>Favorites</span>
                        <span className='pill'>Groups</span>
                    </div>
                </div>
            </div>
            <UsersList users={usersData}/>
            <div>
                <FaWhatsapp />
                <span>Get WhatsApp for Windows</span>
            </div>
    </div>
  )
}

export default ChatNav