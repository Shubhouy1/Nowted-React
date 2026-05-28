type NotecardProps= {
    title : string 
    date :string
    preview :string
}

function Notecard({title,date,preview} : NotecardProps){
   return (
        <div className='flex flex-col gap-2 bg-(--note-card) w-full h-auto rounded pb-4'>
        <div className='pt-3 pl-3'>
            <p className='text-white font-semibold text-base'>{title}</p>
        </div>
        <div className='flex gap-3 text-sm pl-3'>
            <span className='text-white/40' >{date}</span>
            <span className='text-white/40' >{preview}</span>
        </div>
        </div>
   )
}
export default Notecard