import SidebarItem from "./SidebarItem"
import Recent from "./Recent"
import FolderSection from "./folder"
import MoreSection from "./More"

type SideBarProps ={
    setfolderName  : React.Dispatch<React.SetStateAction<string>>
}

function Sidebar ({setfolderName} : SideBarProps){
    return (
   <aside className='flex flex-col gap-6 h-full overflow-y-auto'>
    <SidebarItem />
    {/* recent section */}
    <Recent />

    {/*Folders*/}
     <FolderSection setfolderName={setfolderName}/>
    {/* more */}
     <MoreSection />
  </aside>
    )
}

export default Sidebar