
import { useState } from 'react'
import Editorpanel from '../components/editorpanel/editor'
import FolderList from '../components/folderLIst/folderList'
import Sidebar from '../components/Sidebar'

function AppLayout(){
    const [folderName, setfolderName] = useState<string>("")
    return (
    <div className ="grid grid-cols-[300px_350px_1fr] bg-(--background-color)">
       <Sidebar setfolderName = {setfolderName}/>
       <FolderList folderName = {folderName}/>
       <Editorpanel />
    </div>
    )
}

export default AppLayout