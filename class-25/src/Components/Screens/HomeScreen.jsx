import React from "react";
import WorkspaceList from "../WorkspaceList/WorkspaceList";

const HomeScreen = () => {
    const workspaces = [
        {
            img: '',
            title: 'UTN PWA TN',
            members: [],
            id: 1
        },
        {
            img: '',
            title: 'UTN PWA TM',
            members: [],
            id: 2
        },
        {
            img: '',
            title: 'UTN Fiesta',
            members: [],
            id: 3
        }
    ]
    return (
        <div>
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}

export default HomeScreen