import trash from '../assets/Trash.svg'
import archieved from '../assets/archived.svg'
import star from '../assets/star.svg'
import { useNavigate,useLocation } from 'react-router-dom'

function MoreSection (){
  const navigate = useNavigate()
    return (
    <div className='flex flex-col px-3 gap-3 pb-5'>
      <div className ='text-sm font-sans text-white/60 font-semibold pt-2'>
        <p>More</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-3 cursor-pointer' onClick={()=>navigate("/favorites")}>
          <img className='h-5 w-5' src={star}/>
          <span className='text-sm text-white/60 font-semibold '>Favorites</span>
        </div>
        <div className='flex flex-row gap-3 cursor-pointer' onClick={()=>navigate("/trash")}>
          <img className='h-5 w-5' src={trash}/>
          <span className='text-sm text-white/60 font-semibold'>Trash</span>
        </div>
        <div className='flex flex-row gap-3 cursor-pointer' onClick={()=>navigate("/archived")}>
          <img className ='h-5 w-5' src={archieved}/>
          <span className='text-sm text-white/60 font-semibold ' onClick={()=>navigate("/archived")}>Archived Notes</span>
        </div>
      </div>
    </div>
    )
}

export default MoreSection