import document from '../assets/document.svg'
import documentNS from '../assets/dcoument-notselected.svg' 
import { useState,useEffect } from 'react'
import api from '../api/axios'
import type { recentNotes } from '../types/recentNote'
import type { GetRecentNotesResponseType } from '../types/recentNote'
import { Link ,useParams } from "react-router-dom";

type RecentProps={
  refreshNotes : number
}
function Recent({refreshNotes} : RecentProps){
  const[recentNote , setRecentNote]= useState<recentNotes[]>([])
  const {noteId} =useParams();
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
    },[refreshNotes])
    return (
    <div className='flex flex-col gap-1 ' >
      <span className='text-left text-white/60 text-sm font-sans pl-3 pb-2 font-semibold '>Recents</span>
      {recentNote.map((note)=>{
        const isActive = note.id === noteId;
        return (
        <Link key={note.id} to={`/notes/${note.id}`}>
        <div className={`flex flex-row gap-3 py-2 pl-3 transition-all duration-200 ${ isActive ? "bg-(--select-recent)": ""}`}>
         <img src={isActive ? document:documentNS} className='h-5 w-5'/>
         <p className='text-sm font-sans text-white/60 font-semibold p-'>{note.title}</p>
        </div>
        </Link>
        )
      })}
    </div>
    )
}

export default Recent