import React from 'react'
import { Link } from "react-router-dom"
import Contact from '../Contact/Contact'
import "./ContactsList.css"
import contacts from "../../data/contactsData"

const ContactsList = () => {
    return (
        <>
            <ul className='contacts-list'>
            { contacts.map( ( contact )=>{
                return (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>
                        <Contact
                            contactAvatar={contact.avatar}
                            contactName={contact.name}
                            lastHour={contact.lastHour}
                            bottomText={contact.lastMessage} 
                            key={contact.id}
                        />
                        </Link>
                    </li>
                )
            })}
            </ul>
        </>
    )
}

export default ContactsList