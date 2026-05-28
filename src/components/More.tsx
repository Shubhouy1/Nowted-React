import trash from '../assets/Trash.svg'
import archieved from '../assets/archived.svg'
import star from '../assets/star.svg'

function MoreSection (){
    return (
    <div className='flex flex-col px-3 gap-3'>
      <div className ='text-sm font-sans text-white/60 font-semibold pt-2'>
        <p>More</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-3'>
          <img className='h-5 w-5' src={star}/>
          <span className='text-sm font-sans text-white/60 font-semibold'>Favourites</span>
        </div>
        <div className='flex flex-row gap-3'>
          <img className='h-5 w-5' src={trash}/>
          <span className='text-sm font-sans text-white/60 font-semibold'>Trash</span>
        </div>
        <div className='flex flex-row gap-3'>
          <img className ='h-5 w-5' src={archieved}/>
          <span className='text-sm font-sans text-white/60 font-semibold'>Archived Notes</span>
        </div>
      </div>
    </div>
    )
}

export default MoreSection