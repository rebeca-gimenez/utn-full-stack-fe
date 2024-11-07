import React from 'react'
import './WorkspaceItem.css'

const WorkspaceItem = ({img, title, members,id}) => {
    return (
        <div className="workspace-item">
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {members.length} miembros</span>
        </div>
    )
}

export default WorkspaceItem