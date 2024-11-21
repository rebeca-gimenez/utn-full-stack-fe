import React from 'react'
import { BiCommentAdd } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx"
import "./ChatNav.css"
import ContactsList from '../ContactsList/ContactsList';

const ChatNav = () => {
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
                    <div className='search-bar'>
                        <RxMagnifyingGlass />
                        <span>Search</span>
                    </div>
                    <div className='search-categories'>
                        <span className='pill' id='green-pill'>All</span>
                        <span className='pill'>Unread</span>
                        <span className='pill'>Favorites</span>
                        <span className='pill'>Groups</span>
                    </div>
                </div>
            </div>
            <ContactsList/>
            <div>
                <FaWhatsapp />
                <span>Get WhatsApp for Windows</span>
            </div>
    </div>
    )
}

export default ChatNav