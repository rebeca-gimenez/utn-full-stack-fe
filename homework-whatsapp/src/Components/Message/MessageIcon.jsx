import React from 'react'
import { LuClock } from "react-icons/lu"
import { BiCheckDouble } from "react-icons/bi"
import { BiCheck } from "react-icons/bi"

const MessageIcon = (status) => {
    if ( status=='viewed' ) {
        return <BiCheckDouble />
    } else if ( status=='not-viewed' ){
        return <BiCheckDouble />
    }
    else {
        return <LuClock />
    }
}

export default MessageIcon