import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: " Bu gün 1 tane react projesi tamamlanacak ve github'a eklenecek."
    },
    {
      id: 2,
      text: "20 Tane ingilizce kelime araştırılacak ve örnek cümleler kurulacak"
    },


  ])
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div >
  )
}

export default App
