import { useParams } from 'react-router-dom'
import Description from '../editorpanel/description'
import Info from '../editorpanel/Info'
import Title from '../editorpanel/TitleHeader'
import { useEffect, useState } from 'react'
import type { GetNoteResponseType, Note } from '../../types/Note'
import api from '../../api/axios'
import document_icon from '../../assets/note.svg'
function Editorpanel(){
    const {noteId} = useParams()
    const [note ,setNote] = useState<Note| null>(null)
    const [title,setTitle] = useState<string>("")
    const [content,setContent] = useState<string>("")
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
    },[noteId])
    useEffect(()=>{
        if(note){
            setTitle(note.title)
            setContent(note.content ?? "")
        }
    },[note])

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
    return (
        <div className='h-screen overflow-y-auto w-full flex flex-col gap-5'>
         <Title titleText={title} setTitle ={setTitle}/>
         <Info createdAt ={note?.createdAt} folder ={note?.folder?.name}/>
         <Description content ={content} setContent={setContent}/>
        </div>
    )
}
export default Editorpanel