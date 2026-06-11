type DescProp ={
  content :string
  setContent : React.Dispatch<React.SetStateAction<string>>
}
function Description({content,setContent}:DescProp){
    return (
        <div className='px-7 flex-1 w-full '>
          <textarea value={content} onChange = {(e)=>setContent(e.target.value)} className='text-white text-base outline-none h-full w-full resize-none overflow-y-auto'/>
         </div>
    )
}
export default Description