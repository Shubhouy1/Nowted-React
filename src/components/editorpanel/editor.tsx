import { useParams } from 'react-router-dom'
import Description from '../editorpanel/description'
import Info from '../editorpanel/Info'
import Title from '../editorpanel/TitleHeader'
import { useEffect, useState } from 'react'
import type { GetNoteResponseType, Note } from '../../types/Note'
import api from '../../api/axios'

function Editorpanel(){
    const {noteId} = useParams()
    const [note ,setNote] = useState<Note| null>(null)
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
    return (
        <div className='h-full overflow-y-auto w-full flex flex-col gap-5'>
         <Title titleText={note?.title}/>
         <Info createdAt ={note?.createdAt} folder ={note?.folder?.name}/>
         <Description content ={note?.content}/>
        </div>
    )
}
export default Editorpanel