import trash from '../assets/Trash.svg'
import archieved from '../assets/archived.svg'
import star from '../assets/star.svg'
import { useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function MoreSection (){
  const navigate = useNavigate()
  const {activeView,setActiveView}= useContext(UserContext)
    return (
    <div className='flex flex-col gap-2'>
      <div className ='text-sm font-sans text-white/60 font-semibold pt-1 px-2'>
        <p>More</p>
      </div>
      <div className='flex flex-col gap-1'>
        <div className={`flex flex-row gap-2 pl-2 p-1 cursor-pointer transition-all duration-200 ${activeView ==="favorites"?"bg-(--selected-notecard)":""}`} onClick={()=>{
          setActiveView("favorites")
          navigate("/favorites")}}>
          <img className='h-5 w-5' src={star}/>
          <span className='text-base text-white/60 font-semibold'>Favorites</span>
        </div>
        <div className={`flex flex-row gap-2 pl-2 p-1 cursor-pointer transition-all duration-200 ${activeView ==="trash"?"bg-(--selected-notecard)":""}`}  onClick={()=>{
          setActiveView("trash")
          navigate("/trash")}}>
          <img className='h-5 w-5' src={trash}/>
          <span className='text-base text-white/60 font-semibold'>Trash</span>
        </div>
        <div className={`flex flex-row gap-2 pl-2 p-1 cursor-pointer transition-all duration-200 ${activeView ==="archived"?"bg-(--selected-notecard)":""}`}  onClick={()=>{
          setActiveView("archived")
          navigate("/archived")}}>
          <img className ='h-5 w-5' src={archieved}/>
          <span className='text-base text-white/60 font-semibold' onClick={()=>navigate("/archived")}>Archived Notes</span>
        </div>
      </div>
    </div>
    )
}

export default MoreSection