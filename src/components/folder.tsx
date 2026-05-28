import upload_folder from '../assets/folder_icon.svg'
import openFolder from '../assets/open_folder.svg'
import closeFolder from '../assets/close.svg'
function FolderSection (){
    return (
    <div className='flex flex-col gap-3'>
      <div className="flex flex-row justify-between pt-2">
       <p className='text-sm font-sans text-white/60 font-semibold px-3'>Folders</p>
       <img className='pr-5' src={upload_folder}/>
      </div>
      <div className='pl-3 flex flex-row gap-3 bg-white/6 p-2'>
       <img className='h-5 w-5' src={openFolder}  />
       <span className='text-sm font-sans text-white font-semibold'>Personal</span>
      </div>
      <div className='pl-3 flex flex-row gap-3 '>
       <img className='h-5 w-5' src={closeFolder}  />
       <span className='text-sm font-sans text-white/60 font-semibold'>Personal</span>
      </div>
      <div className='pl-3 flex flex-row gap-3 '>
       <img className='h-5 w-5' src={closeFolder}  />
       <span className='text-sm font-sans text-white/60 font-semibold'>Personal</span>
      </div>
      <div className='pl-3 flex flex-row gap-3 '>
       <img className='h-5 w-5' src={closeFolder}  />
       <span className='text-sm font-sans text-white/60 font-semibold'>Personal</span>
      </div>
      <div className='pl-3 flex flex-row gap-3 '>
       <img className='h-5 w-5' src={closeFolder}  />
       <span className='text-sm font-sans text-white/60 font-semibold'>Personal</span>
      </div>
    </div>
    )
}

export default FolderSection