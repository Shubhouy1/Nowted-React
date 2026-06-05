import Notecard from "./notecard"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../../api/axios"
import type { Note,GetNotesResponseType } from "../../types/Note"
function FolderList (){
  const {folderId} = useParams()
  const [notes,setNotes] = useState<Note[]>([])
  useEffect(()=>{
    async function getNotes(){
      try{
        const response=await api.get<GetNotesResponseType>("/notes");
        console.log("folderID",folderId)
        const folderNotes = response.data.notes.filter((note)=>{
          console.log(note.folderId,note.title)
          return note.folderId===folderId
        })
        setNotes(folderNotes)
        console.log(folderNotes)
      }catch(error){
        console.log(error);
      }
    }
    getNotes();
  },[folderId])
    return (
        <div className='flex flex-col bg-(--folder-section) h-full gap-5'>
        <div className='pt-5 pl-5'>
          <p className="text-[22px] font-semibold leading-none text-white">{notes[0]?.folder?.name}</p>
        </div >
        <div className="px-5 flex flex-col gap-4">
        {notes.map((note)=>(
         <Notecard
          title={note.title}
          date={note.createdAt}
          preview={note.preview ??""}
         />
         ))}
        </div>
       </div>
    )
}

export default FolderList