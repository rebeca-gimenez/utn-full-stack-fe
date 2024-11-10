import React from "react";
import WorkspaceList from "../Components/WorkspaceList/WorkspaceList";
import { Link } from "react-router-dom"

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
            <Link to={'/estados'}>Ir a estados</Link>
            <Link to={'/formularios'}>Ir a formularios</Link>
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}

export default HomeScreen