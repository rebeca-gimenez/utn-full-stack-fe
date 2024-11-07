import React from "react"
import { useParams } from "react-router-dom"
const WorkspaceScreen = () => {
    const workspace_id = useParams().workspace_id
    return (
        <div>
            <h1>Workspace con id {workspace_id}</h1>
        </div>
    )
}
export default WorkspaceScreen