import { useState } from 'react'
import Editorpanel from '../components/editorpanel/editor'
import FolderList from '../components/folderLIst/folderList'
import Sidebar from '../components/Sidebar'

function AppLayout(){
    const [folderName, setfolderName] = useState<string>("")
    const [refreshNotes, setRefreshNotes] = useState<number>(0)
    return (
    <div className ="grid grid-cols-[300px_350px_1fr] bg-(--background-color)">
       <Sidebar setfolderName = {setfolderName} refreshNotes={refreshNotes} setRefreshNotes={setRefreshNotes}/>
       <FolderList folderName = {folderName} refreshNotes={refreshNotes}/>
       <Editorpanel setRefreshNotes={setRefreshNotes}/>
    </div>
    )
}

export default AppLayout