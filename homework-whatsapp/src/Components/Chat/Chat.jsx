import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ContactsContext} from '../../Context/ContactsContext'
import MessagesList from '../MessagesList/MessagesList'
import MessageInput from '../MessageInput/MessageInput'
import ContactHeader from '../ContactHeader/ContactHeader'

const Chat = () => {
    const { contact_id } = useParams()

    const { getContactById } = useContext(ContactsContext)

    const current_contact = getContactById(contact_id)
    
    console.log(current_contact)
    return (
    <div className='messages-screen'>
        {!current_contact
            ? (<ContactHeader 
                    contactName={"No hay contacto"}/>
                )
            : (<>
                <ContactHeader 
                    contactAvatar={current_contact.avatar}
                    contactName={current_contact.name}
                    contactLastHour={current_contact.lastHour}/>
                <MessagesList 
                    messages={current_contact.messagesList}/>
                <MessageInput contactID={contact_id} />
            </>)     
        }
    </div>
    )
}

export default Chat