import './App.css'
import {Routes , Route} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/notes/:noteId" element={<AppLayout />} />
      <Route path ="/folders/:folderId" element={<AppLayout />}/> 
      <Route path ="/folders/:folderId/notes/:noteId" element={<AppLayout />}/> 
      <Route path = "/archived" element = {<AppLayout />} />
      <Route path = "/archived/notes/:noteId" element = {<AppLayout />} />
      <Route path = "/favorites" element = {<AppLayout />} />
      <Route path = "/favorites/notes/:noteId" element = {<AppLayout />} />
      <Route path = "/trash" element = {<AppLayout />} />
      <Route path = "/trash/notes/:noteId" element = {<AppLayout />} />
    </Routes>
  )
}

export default App
