type DescProp ={
  content :string
}
function Description({content}:DescProp){
    return (
        <div className='px-7 h-auto w-full '>
          <p className='text-white text-base'>{content}</p>
         </div>
    )
}
export default Description