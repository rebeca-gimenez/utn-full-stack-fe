import React from 'react'
import {WorkspaceItem} from '../'

const WorkspaceList = ({workspaces}) => {
    let workspacesListJSX = workspaces.map(
        (workspace)=>{
            return <WorkspaceItem 
            title={workspace.title} 
            id={workspace.id} 
            members={workspace.members} 
            img={workspace.img}
            key={workspace.id}
            />
        }
    )
    return (
        <div>
            <h1>Tus espacios de trabajo</h1>
            <div>{workspacesListJSX}</div>
        </div>
    )
}

export default WorkspaceList