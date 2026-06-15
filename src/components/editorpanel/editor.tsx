import { useParams } from 'react-router-dom'
import Description from '../editorpanel/description'
import Info from '../editorpanel/Info'
import Title from '../editorpanel/TitleHeader'
import { useEffect, useState } from 'react'
import type { GetNoteResponseType, Note } from '../../types/Note'
import api from '../../api/axios'
import document_icon from '../../assets/note.svg'
import clock from '../../assets/clock.svg'
import { useLocation } from 'react-router-dom'

type EditorPanelProps={
    setRefreshNotes : React.Dispatch<React.SetStateAction<number>>
    refreshNotes : number
}
function Editorpanel({setRefreshNotes,refreshNotes}:EditorPanelProps){
    const {noteId} = useParams()
    const [note ,setNote] = useState<Note| null>(null)
    const [title,setTitle] = useState<string>("")
    const [content,setContent] = useState<string>("")
  
    const [deletedNoteId, setDeletedNoteId] = useState<string>("")
    const location = useLocation()
    const isTrash = location.pathname.startsWith("/trash")
    useEffect(()=>{
        async function fetchNote(){
            if(!noteId){
                return
            }
            try{
                const response = await api.get<GetNoteResponseType>(`/notes/${noteId}`)
                setNote(response.data.note)
            }catch(error){
                console.log(error)
            }
        }
        fetchNote()
    },[noteId,refreshNotes])
    useEffect(()=>{
        if(note){
            setTitle(note.title)
            setContent(note.content ?? "")
        }
    },[note])

    async function saveNote(){
        if(!noteId|| !note){
            return
        }
        if(!title.trim() && !content.trim()){
            return
        }
        if(title===note.title && content === note.content){
            return
        }
        try{
            await api.patch(`/notes/${noteId}`,{
                folderId :note.folder.id,
                title,
                content,
                isfavourite :note.isFavorite,
                isArchived : note.isArchived
            })
            setRefreshNotes(prev=>prev+1)
        }catch(error){
           console.log(error)
        }
    }
    async function restoreNote() {
        try{
            await api.post(`/notes/${note?.id}/restore`)
            setDeletedNoteId("")
            setRefreshNotes(prev=>prev+1)
        }catch(error){
            console.log(error)
        }
        
    }
    useEffect(()=>{
        if(!note) return
        if(title===note.title && content ===note.content){
            return
        }
        const timer = setTimeout(()=>{
            saveNote()
        },2000)
        return ()=>clearTimeout(timer)
    },[title,content,note])
    

    if(!noteId){
        return (
           <div className='flex flex-col justify-center items-center gap-2 h-screen'>
             <img src={document_icon} className='w-20 h-20'></img>
             <div className='flex flex-col justify-center items-center gap-2'>
             <p className='font-semibold text-white text-2xl'>Select a note to view</p>
             <p className='font-semibold text-white/60 text-sm'>Choose a note from the list on the left to view its contents, or create a </p>
             <p className='font-semibold text-white/60 text-sm'>new note to add to your collection</p>
             </div>
           </div>
        )
    }
    if(note?.id===deletedNoteId || isTrash){
        return (
            <div className='flex flex-col justify-center items-center gap-2 h-screen'>
             <img src={clock} className='w-15 h-15'></img>
             <div className='flex flex-col justify-center items-center gap-1'>
             <p className='font-semibold text-white text-2xl'> Restore "{note?.title}"</p>
             <p className='font-semibold text-white/60 text-sm'>Don't want to lose this note? It's not too late! Just click the 'Restore' </p>
             <p className='font-semibold text-white/60 text-sm'>button and it will be added back to your list. It's that simple.</p>
             <button className='rounded p-2 bg-(--select-recent) text-white cursor-pointer' onClick={restoreNote}>Restore</button>
             </div>
           </div>
        )
    }
    return (
        <div className='h-screen overflow-hidden w-full flex flex-col gap-5'>
         <Title titleText={title} setTitle ={setTitle}noteId={note?.id} isFavorite = {note?.isFavorite}
         setRefreshNotes ={setRefreshNotes} 
          setDeletedNoteId = {setDeletedNoteId}
         />
         <Info createdAt ={note?.createdAt} folder ={note?.folder?.name}/>
         <Description content ={content} setContent={setContent}/>
        </div>
    )
}
export default Editorpanel