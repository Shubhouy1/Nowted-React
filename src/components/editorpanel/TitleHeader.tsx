import archived from '../../assets/menu_archived.svg'
import deleteIcon from '../../assets/menu_delete.svg'
import { useState } from 'react'
import menuIcon from '../../assets/Frame 1.svg'
import favorite from '../../assets/menu_favourite.svg'

type titleProps ={
    titleText:string
    setTitle :React.Dispatch<React.SetStateAction<string>>
}
function Title({titleText, setTitle}:titleProps){
    const [showMenu, setShowMenu]=useState<boolean>(false)
    return (
        <div className='flex  justify-between h-auto w- ull px-7 pt-7'>
          <input value={titleText} onChange={(e)=>setTitle(e.target.value)} className='text-white font-semibold text-2xl outline-none'/>
          <img className='h-7 w-7 pt-1 cursor-pointer' src={menuIcon} onClick={()=>setShowMenu(prev=>!prev)}/>
            <div className={`flex flex-col absolute rounded p-3 text-white right-8 top-16 bg-(--menu) justify-between gap-4
            transition-all duration-300 ease-in-out ${
                showMenu ? "opacity-100 scale-100" :"opacity-0 scale-95 pointer-events-none"
            }`}>
             <div className='flex flex-col gap-2'>
                <div className='flex gap-3 px-2 cursor-pointer'>
                <img className='h-5 w-5 pt-1 ' src={favorite} />
                <span>Add to favorites</span>
             </div>
             <div className='flex gap-3 px-2 cursor-pointer'>
                <img className='h-5 w-5 pt-1 ' src={archived} />
                <span>Archived</span>
             </div>
             </div>
             <div className='h-0.5 w-full bg-(--menu-underline)'>
          </div>
             <div className='flex gap-3 px-2 cursor-pointer'>
                <img className='h-5 w-5 pt-1 ' src={deleteIcon} />
                <span>Delete</span>
             </div>
            </div>
          
        </div>
    )
}

export default Title