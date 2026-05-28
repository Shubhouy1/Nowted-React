import SidebarItem from "./SidebarItem"
import Recent from "./Recent"
import FolderSection from "./folder"
import MoreSection from "./More"

function Sidebar (){
    return (
   <aside className='flex flex-col gap-6 h-full overflow-y-auto'>
    <SidebarItem />
    {/* recent section */}
    <Recent />

    {/*Folders*/}
     <FolderSection />
    {/* more */}
     <MoreSection />
  </aside>
    )
}

export default Sidebar