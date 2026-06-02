import upload_folder from '../assets/folder_icon.svg'
import openFolder from '../assets/open_folder.svg'
import closeFolder from '../assets/close.svg'
import type { folderInfo, GetFolderDataResponse } from '../types/folderData'
import { useEffect, useState } from 'react'
import api from '../api/axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function FolderSection (){
  const [folder,setFolder] = useState<folderInfo[]>([])
  const {folderId} = useParams()
  useEffect(()=>{
    async function getFolders(){
    try{
      const response = await api.get<GetFolderDataResponse>(`/folders`)
      setFolder(response.data.folders)
    }catch(error){
      console.log(error)
    }
    }
    getFolders();
  },[])
    return (
    <div className='flex flex-col gap-3'>
      <div className="flex flex-row justify-between pt-2">
       <p className='text-sm font-sans text-white/60 font-semibold px-3'>Folders</p>
       <img className='pr-5' src={upload_folder}/>
      </div>
     {folder.map((folder)=>{
      const isActive = folder.id===folderId
      return (
        <Link key ={folder.id} to ={`/folders/${folder.id}`}>
          <div  className={`pl-3 flex flex-row gap-3 transition-all duration-200 ${isActive?"bg-white/6 p-2":""}`}>
            <img className='h-5 w-5' src={isActive ? openFolder : closeFolder} />
            <span className={`text-sm font-sans ${isActive ?"text-white" : "text-white/60 " } font-semibold`}>{folder.name}</span>
          </div>
        </Link>
      )
     })}
    </div>
    )
}

export default FolderSection