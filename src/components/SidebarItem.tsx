import Logo from "../assets/Group 1.svg"
import searchIcon from "../assets/Frame.svg"
import { useState } from "react"


function SidebarItem(){
  const [isSearch , setIsSearch] = useState<boolean>(false)
  const [search,setSearch] =useState<string>("")
    return (
    <div className="flex flex-col gap-4">
    <div className='flex flex-row justify-between pt-3 w-full'>
      <img className='w-30 pl-3'src={Logo}/>
      <img className='w-10 h-8 pr-5 pt-2 cursor-pointer ' src={searchIcon} onClick={()=>setIsSearch(!isSearch)}/>
    </div>
    <div className='px-3 '>
      <div className="transition-all duration-300 ease-in-out">
      {!isSearch ? (
      <button className="w-full h-10 bg-white/5 rounded p-2.5 flex items-center justify-center gap-2 text-sm">
        <p className='text-white font-sans'>+ New Note</p>
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