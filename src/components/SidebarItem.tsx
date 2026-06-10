import Logo from "../assets/Group 1.svg"
import searchIcon from "../assets/Frame.svg"
import { useState,useContext } from "react"
import { UserContext } from "../context/UserContext"
import api from "../api/axios"

type SideBarItemProps={
  setRefreshNotes: React.Dispatch<React.SetStateAction<number>>
}

function SidebarItem({setRefreshNotes} : SideBarItemProps){
  const [isSearch , setIsSearch] = useState<boolean>(false)
  const [search,setSearch] =useState<string>("")
  const {currSelectedFolderId} = useContext(UserContext)

  async function createNote(){
    if(!currSelectedFolderId){
      return
    }
    try{
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
    }
  }
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
    </div>
    </div>
    )
}
export default SidebarItem