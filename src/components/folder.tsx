import upload_folder from '../assets/folder_icon.svg'
import openFolder from '../assets/open_folder.svg'
import closeFolder from '../assets/close.svg'
import type { folderInfo, GetFolderDataResponse } from '../types/folderData'
import { useEffect, useState } from 'react'
import api from '../api/axios'
import { Link } from 'react-router-dom'
import { useParams,useNavigate,useLocation} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

type FolderSectionProps={
   setfolderName  : React.Dispatch<React.SetStateAction<string>>
}

function FolderSection ({setfolderName}:FolderSectionProps){
  const [folder,setFolder] = useState<folderInfo[]>([])
  const [isCreatingFolder, setIscreatingFolder] = useState<boolean>(false)
  const [newFolderName, setNewFolderName] = useState<string>("")
  const {folderId} = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const {setCurrSelectedFolderId, setActiveView} =useContext(UserContext)

  async function getFolders(){
    try{
      const response = await api.get<GetFolderDataResponse>(`/folders`)
      setFolder(response.data.folders)
    }catch(error){
      console.log(error)
    }
    }
  useEffect(()=>{
    getFolders();
  },[])
  useEffect(()=>{
    const currFolder = folder.find(
      (item)=>item.id===folderId
    )
      if(currFolder){
        setfolderName(currFolder.name)
        setCurrSelectedFolderId(currFolder.id)
        setActiveView("folder")
      }
  },[folderId,folder])
  useEffect(()=>{
    if(location.pathname==="/"&& folder.length>0){
        const firstFolder = folder[0]
        setfolderName(firstFolder.name)
        navigate(`/folders/${firstFolder.id}`)
      }
  },[folder,location.pathname])

  async function createFolder(){
    if(!newFolderName.trim()){
      return
    }
    try{
      await api.post("/folders",{
        name : newFolderName
      })
      setNewFolderName("")
      setIscreatingFolder(false)
      getFolders()
    }catch(error){
      console.log(error)
    }
  }
    return (
    <div className='flex flex-col gap-2'>
      <div className="flex flex-row justify-between pt-1">
       <p className='text-sm font-sans text-white/60 font-semibold px-3'>Folders</p>
       <img className='pr-5 cursor-pointer' src={upload_folder} onClick={()=>setIscreatingFolder(true)}/>
      </div>
      <div className='max h-20 overflow-y-auto flex flex-col gap-2'>
      {isCreatingFolder &&(
        <div className='px-3 pt-3 flex gap-3'>
        <img src ={openFolder} className='h-5 w-5'/>
        <input className='text-white border border-white/40 rounded outline-none ' autoFocus
        value={newFolderName} onChange={(e)=>setNewFolderName(e.target.value)}
         placeholder='Enter Folder Name' onKeyDown={(e)=>{
          if(e.key==="Enter"){
            createFolder()
          }
        }} onBlur={()=>{
          setIscreatingFolder(false)
          setNewFolderName("")
        }}/>
        </div>
      )}
      {folder.map((folder)=>{
        const isActive = folder.id===folderId
        return (
          <Link key ={folder.id} to ={`/folders/${folder.id}`} onClick={()=>setfolderName(folder.name)}>
            <div  className={`pl-3 flex flex-row gap-3 transition-all duration-200 ${isActive?"bg-white/6 p-2":""}`}>
              <img className='h-5 w-5' src={isActive ? openFolder : closeFolder} />
              <span className={`text-sm font-sans ${isActive ?"text-white" : "text-white/60 " } font-semibold`}>{folder.name}</span>
            </div>
          </Link>
        )
      })}
     </div>
    </div>
    )
}

export default FolderSection