import SidebarItem from "./SidebarItem"
import Recent from "./Recent"
import FolderSection from "./folder"
import MoreSection from "./More"

type SideBarProps ={
    setfolderName  : React.Dispatch<React.SetStateAction<string>>
    refreshNotes : number
    setRefreshNotes: React.Dispatch<React.SetStateAction<number>>
}

function Sidebar ({setfolderName,refreshNotes,setRefreshNotes} : SideBarProps){
    return (
   <aside className='flex flex-col gap-6 h-full overflow-y-auto'>
    <SidebarItem setRefreshNotes ={setRefreshNotes}/>
    {/* recent section */}
    <Recent refreshNotes ={refreshNotes}/>

    {/*Folders*/}
     <FolderSection setfolderName={setfolderName}/>
    {/* more */}
     <MoreSection />
  </aside>
    )
}

export default Sidebar