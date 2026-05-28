import Logo from "../assets/Group 1.svg"
import searchIcon from "../assets/Frame.svg"

function SidebarItem(){
    return (
    <div className="flex flex-col gap-4">
    <div className='flex flex-row justify-between pt-3 w-full'>
      <img className='w-30 pl-3'src={Logo}/>
      <img className='w-10 h-8 pr-5 pt-2' src={searchIcon} />
    </div>
    <div className='px-3'>
      <button className="w-full h-10 bg-white/5 rounded p-2.5 flex items-center justify-center gap-2 text-sm">
        <p className='text-white font-sans'>+ New Note</p>
      </button>
    </div>
    </div>
    )
}
export default SidebarItem