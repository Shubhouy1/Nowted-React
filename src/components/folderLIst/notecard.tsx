type NotecardProps= {
    title : string 
    date :string
    preview :string
    isActive : boolean
}

function Notecard({title,date,preview,isActive} : NotecardProps){
   const newDate = new Date(date).toLocaleDateString("en-GB");
   return (
        <div className={`flex flex-col gap-2 w-full h-auto rounded pb-4 transition-all duration-200 ${isActive ? "bg-(--selected-notecard)": "bg-(--note-card)"}` }>
        <div className='pt-3 pl-3'>
            <p className='text-white font-semibold text-base'>{title ? title : "Untitled"}</p>
        </div>
        <div className='flex gap-3 text-sm pl-3'>
            <span className='text-white/40' >{newDate}</span>
            <span className='text-white/40' >{preview}</span>
        </div>
        </div>
   )
}
export default Notecard