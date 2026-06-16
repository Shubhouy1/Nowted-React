import archived from '../../assets/menu_archived.svg'
import deleteIcon from '../../assets/menu_delete.svg'
import { useEffect, useRef, useState } from 'react'
import menuIcon from '../../assets/Frame 1.svg'
import favorite from '../../assets/menu_favourite.svg'
import api from '../../api/axios'
import { useParams,useNavigate } from 'react-router-dom'


type titleProps ={
    titleText:string 
    setTitle :React.Dispatch<React.SetStateAction<string>>
    noteId : string
    isFavorite : boolean
    isArchived : boolean
    setRefreshNotes : React.Dispatch<React.SetStateAction<number>>
    setDeletedNoteId : React.Dispatch<React.SetStateAction<string>>
}
function Title({titleText, setTitle,noteId,setRefreshNotes,setDeletedNoteId,
    isFavorite ,isArchived}:titleProps){
    const [showMenu, setShowMenu]=useState<boolean>(false)
    const navigate =useNavigate()
    const {folderId} = useParams()
    const menuRef = useRef<HTMLDivElement>(null)
    async function deleteNote(){
        if(!noteId){
            return
        }
        try{
            await api.delete(`/notes/${noteId}`)
            setDeletedNoteId(noteId)
            console.log("Deleted")
            setRefreshNotes(prev=>prev+1)
        }catch(error){
            console.log(error)
        }
    }
    async function toggleFavorute(){
        if(!noteId){
            return
        }
        try{
            await api.patch(`/notes/${noteId}`,{
                isFavorite : !isFavorite
            })
            setShowMenu(false)
            setRefreshNotes(prev=>prev+1)
        }catch(error){
            console.log(error)
        }
    }

    async function archiveNote(){
        if(!noteId){
            return
        }
        try{
            await api.patch(`/notes/${noteId}`,{
                isArchived : !isArchived
            })
            setShowMenu(false)
            setRefreshNotes(prev=>prev+1)
            if(folderId){
            navigate(`/folders/${folderId}`)
            }else{
                navigate("/archived")
            }
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        function handleClickOutside(e:MouseEvent){
            if(menuRef.current && !menuRef.current.contains(e.target as Node)){
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutside)
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
    },[])
    return (
        <div className='flex  justify-between h-auto w- ull px-7 pt-7'>
          <input value={titleText ?? ""} onChange={(e)=>setTitle(e.target.value)} className='text-white font-semibold text-2xl outline-none'/>
          <div ref={menuRef}>
          <img className='h-7 w-7 pt-1 cursor-pointer' src={menuIcon} onClick={()=>setShowMenu(prev=>!prev)}/>
          </div>
            <div ref= {menuRef} className={`flex flex-col absolute rounded p-3 text-white right-8 top-16 bg-(--menu) justify-between gap-4
            transition-all duration-300 ease-in-out ${
                showMenu ? "opacity-100 scale-100" :"opacity-0 scale-95 pointer-events-none"
            }`}>
             <div className='flex flex-col gap-2'>
                <div className='flex gap-3 px-2 cursor-pointer' onClick={toggleFavorute}>
                <img className='h-5 w-5 pt-1 ' src={favorite} />
                <span>{isFavorite ?"Remove from favorites" :"Add to favorites"}</span>
             </div>
             <div className='flex gap-3 px-2 cursor-pointer' onClick={archiveNote}>
                <img className='h-5 w-5 pt-1 ' src={archived} />
                <span>{isArchived ? "Unarchive" :"Archived"}</span>
             </div>
             </div>
             <div className='h-0.5 w-full bg-(--menu-underline)'>
          </div>
             <div className='flex gap-3 px-2 cursor-pointer' onClick={deleteNote}>
                <img className='h-5 w-5 pt-1 ' src={deleteIcon} />
                <span>Delete</span>
             </div>
            </div>
          
        </div>
    )
}

export default Title