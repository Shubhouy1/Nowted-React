import document from '../assets/document.svg'
import documentNS from '../assets/dcoument-notselected.svg' 
import { useState,useEffect } from 'react'
import api from '../api/axios'
import type { recentNotes } from '../types/recentNote'
import type { GetRecentNotesResponseType } from '../types/recentNote'
function Recent(){
  const[recentNote , setRecentNote]= useState<recentNotes[]>([])
    useEffect(()=>{
      async function GetRecent(){
        try{
          const response = await api.get<GetRecentNotesResponseType>("/notes/recent");
          setRecentNote(response.data.recentNotes)
        }catch(error){
          console.log(error)
        }
      }
      GetRecent();
    },[])
    return (
      
    <div className='flex flex-col gap-4' >
      <span className='text-left text-white/60 text-sm font-sans pl-3 font-semibold '>Recents</span>
     
      {recentNote.map((note)=>{
        return (
        <div key={note.id} className='flex flex-row gap-3 pl-3'>
         <img src={documentNS} className='h-5 w-5'/>
         <p className='text-sm font-sans text-white/60 font-semibold'>{note.title}</p>
      </div>
        )
      })}
    </div>
    )
}

export default Recent