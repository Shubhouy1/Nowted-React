import Notecard from "./notecard"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import api from "../../api/axios"
import type { Note,GetNotesResponseType } from "../../types/Note"

type folderListProps={
  folderName : string
}
function FolderList ({folderName}:folderListProps){
  const {folderId} = useParams()
  const [notes,setNotes] = useState<Note[]>([])
  useEffect(()=>{
    async function getNotes(){
      try{
        const response=await api.get<GetNotesResponseType>(`/notes?folderId=${folderId}&page=1&limit=10`);
        setNotes(response.data.notes)
        console.log(response.data.notes)
      }catch(error){
        console.log(error);
      }
    }
    getNotes();
  },[folderId])

    return (
        <div className='flex flex-col bg-(--folder-section) h-full gap-5'>
        <div className='pt-5 pl-5'>
            <p className="text-[22px] font-semibold leading-none text-white">{folderName}</p>
        </div >
        <div className="px-5 flex flex-col gap-4">
        {notes.map((note)=>(
        <Link key={note.id} to={`/folders/${folderId}/notes/${note.id}`}>
         <Notecard 
        
          title={note.title}
          date={note.createdAt}
          preview={note.preview ??""}
         />
         </Link>
         ))}
        </div>
       </div>
    )
}

export default FolderList