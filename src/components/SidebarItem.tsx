import Logo from "../assets/Group 1.svg"
import searchIcon from "../assets/Frame.svg"
import { useState,useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import api from "../api/axios"
import type { Note } from "../types/Note"

type SideBarItemProps={
  setRefreshNotes: React.Dispatch<React.SetStateAction<number>>
}

function SidebarItem({setRefreshNotes} : SideBarItemProps){
  const [isSearch , setIsSearch] = useState<boolean>(false)
  const {currSelectedFolderId} = useContext(UserContext)
  const[isCreating, setIsCreating] = useState<boolean>(false)
  const[search ,setSearch]= useState<string>("")
  const[searchedNotes, setSeearchedNotes]=useState<Note[]>([])
  const[allNotes ,setAllNotes]=useState<Note[]>([])
  async function createNote(){
    if(!currSelectedFolderId || isCreating){
      return
    }
    try{
      setIsCreating(true)
      const response =await api.post("/notes",{
        folderId : currSelectedFolderId,
        title : "Untitled",
        content : "",
        isFavorite : false,
        isArchived : false
      })
      setRefreshNotes(prev=>prev+1)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }finally{
      setIsCreating(false)
    }
  }
  useEffect(()=>{
    async function getAllNotes(){
      try{
        const response= await api.get("/notes?limit=400")
        setAllNotes(response.data.notes)
      }catch(error){
        console.log(error)
      }
    }
    getAllNotes()
  })
    useEffect(()=>{
      const value = search.trim().toLowerCase()
      if(!value){
        setSeearchedNotes([])
        return
      }
      const matches = allNotes.filter((note=>
        note.title?.toLowerCase().includes(value)
      ))
      setSeearchedNotes(matches)
    },[search,allNotes])
    return (
    <div className="flex flex-col gap-4">
    <div className='flex flex-row justify-between pt-3 w-full'>
      <img className='w-30 pl-3'src={Logo}/>
      <img className='w-10 h-8 pr-5 pt-2 cursor-pointer ' src={searchIcon} onClick={()=>setIsSearch(!isSearch)}/>
    </div>
    <div className='px-3 '>
      <div className="transition-all duration-300 ease-in-out">
      {!isSearch ? (
      <button onClick={createNote} className="w-full h-10 bg-white/5 rounded p-2.5 flex items-center justify-center gap-2 text-sm cursor-pointer">
        <p className='text-white font-sans '>+ New Note</p>
      </button>
      ):(
        <input autoFocus value={search} onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search note..."
        className="w-full h-10 bg-white/5 rounded p-2.5 text-white outline-none transition-all duration-300 "
        // onBlur={()=>{
        //   if(!search.trim()){
        //     setIsSearch(false)
        //   }
        // }}
        />
      )}
      </div>
      {search.trim()&&(
         <div className="w-full h-30 overflow-y-auto rounded-md z-50 bg-(--note-card)">
          {searchedNotes.map(note=>(
            <div className="text-white" key = {note.id}>
              {note.title}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    )
}
export default SidebarItem