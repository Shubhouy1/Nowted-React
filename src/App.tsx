import './App.css'
import {Routes , Route} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/notes/:noteId" element={<AppLayout />} />
    </Routes>
  )
}

export default App
