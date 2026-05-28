import document from '../assets/document.svg'
import documentNS from '../assets/dcoument-notselected.svg' 

function Recent(){
    return (
    <div className='flex flex-col gap-4' >
      <span className='text-left text-white/60 text-sm font-sans pl-3 font-semibold '>Recents</span>
      <div className='flex flex-row gap-3 bg-(--select-recent) py-3 pl-3'>
        <img src={document} className='h-5 w-5'/>
        <p className='text-sm font-sans text-white'>Reflection on the Month of June</p>
      </div>
      <div className='flex flex-row gap-3 pl-3'>
         <img src={documentNS} className='h-5 w-5'/>
         <p className='text-sm font-sans text-white/60 font-semibold'>Projected Proposal</p>
      </div>
      <div className='flex flex-row gap-3 pl-3'>
         <img src={documentNS} className='h-5 w-5'/>
         <p className='text-sm font-sans text-white/60 font-semibold'>Projected Proposal</p>
      </div>
    </div>
    )
}

export default Recent