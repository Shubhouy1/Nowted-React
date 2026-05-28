import dateIcon from '../../assets/cal.svg'
import folderIcon from '../../assets/close.svg'
function Info(){
    return (
         <div className='flex flex-col gap-5 px-7'>
          <div className='flex '>
            <img className='w-6 h-6' src ={dateIcon}/>
            <div className='flex gap-30'>
            <span className='text-sm text-white/60 pt-0.5'> Date</span>
            <span className='text-sm text-white/60 pt-0.5'> 21/06/2022</span>
            </div>
          </div>
          <div className='h-0.5 w-full bg-(--underline-color)'>
          </div>
          <div className='flex '>
            <img className='w-5 h-5 pt-1' src ={folderIcon}/>
            <div className='flex gap-28'>
            <span className='text-sm text-white/60 pt-0.5 pl-1'> Folder</span>
            <span className='text-sm text-white/60 pt-0.5 underline'> Perosnal</span>
            </div>
          </div>
        </div>
    )
}
export default Info