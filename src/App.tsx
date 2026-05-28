import './App.css'
import Editorpanel from './components/editorpanel/editor'
import FolderList from './components/folderLIst/folderList'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className ="grid grid-cols-[300px_350px_1fr] bg-(--background-color)">
       <Sidebar />
       <FolderList />
       <Editorpanel />
    </div>
  )
}

export default App
