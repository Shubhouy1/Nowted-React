import Notecard from "./notecard"
import { useState, useEffect } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import api from "../../api/axios"
import type { Note,GetNotesResponseType } from "../../types/Note"

type folderListProps={
  folderName : string
  refreshNotes : number
}
function FolderList ({folderName,refreshNotes}:folderListProps){
  const {folderId,noteId} = useParams()
  const [notes,setNotes] = useState<Note[]>([])
  const location = useLocation()
  console.log(location.pathname)
  const isFavoritePage = location.pathname.startsWith("/favorites")
  const isArchivedPage = location.pathname.startsWith("/archived")
  const isTrashPage = location.pathname.startsWith("/trash")
  useEffect(()=>{
    console.log(refreshNotes)
    async function getNotes(){
      try{
        let url =`/notes?folderId=${folderId}`
        if(isFavoritePage){
          url="/notes?favorite=true"
        }
        if(isArchivedPage){
          url="/notes?archived=true"
        }
        if(isTrashPage){
          url="/notes?deleted=true"
        }
      
        const response=await api.get<GetNotesResponseType>(url);
        setNotes(response.data.notes)
        console.log(response.data.notes)
      }catch(error){
        console.log(error);
      }
    }
    getNotes();
  },[folderId,refreshNotes,isArchivedPage,isFavoritePage,isTrashPage])

    return (
        <div className='flex flex-col bg-(--folder-section) h-full gap-5'>
        <div className='pt-5 pl-5'>
            <p className="text-[22px] font-semibold leading-none text-white">{isTrashPage?"Trash" : isArchivedPage ?"Archived" : isFavoritePage? "Favorite" : folderName}</p>
        </div >
        <div className="px-5 flex flex-col gap-4">
        {notes.map((note)=>{
         const isActive = noteId ===note.id
         let notePath =`/folders/${folderId}/notes/${note.id}`
         if(isFavoritePage){
          notePath =`/favorites/notes/${note.id}`
         }
         if(isTrashPage){
          notePath =`/trash/notes/${note.id}`
         }
         if(isArchivedPage){
          notePath =`/archived/notes/${note.id}`
         }
         return(
        <Link key={note.id} to={notePath}>
         <Notecard 
          title={note.title}
          date={note.createdAt}
          preview={note.preview ??""}
          isActive= {isActive}
         />
         </Link>
         )
        })}
        </div>
       </div>
    )
}

export default FolderList