type DescProp ={
  content :string
  setContent : React.Dispatch<React.SetStateAction<string>>
}
function Description({content,setContent}:DescProp){
    return (
        <div className='px-7 h-auto w-full '>
          <input value={content} onChange = {(e)=>setContent(e.target.value)} className='text-white text-base outline-none'/>
         </div>
    )
}
export default Description