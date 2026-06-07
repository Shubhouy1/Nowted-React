
import menuIcon from '../../assets/Frame 1.svg'
type titleProps ={
    titleText:string
    setTitle :React.Dispatch<React.SetStateAction<string>>
}
function Title({titleText, setTitle}:titleProps){
    return (
        <div className='flex  justify-between h-auto w- ull px-7 pt-7'>
          <input value={titleText} onChange={(e)=>setTitle(e.target.value)} className='text-white font-semibold text-2xl outline-none'/>
          <img className='h-7 w-7 pt-1' src={menuIcon} />
        </div>
    )
}

export default Title