import './App.css'
import { useRef, useState, useEffect } from 'react'
import LeaveComponentText from './components/LeaveComponentText'
import MainContext from './context/MainContext'
import Note from './components/Note'
import NoteBox from './components/NoteBox'


function App() {

  const [notes, setNotes] = useState(localStorage.notes && JSON.parse(localStorage.notes) || [])

  const [boxPosition, setBoxPosition] = useState([{
    x: 0,
    y: 0
  }])
  const [mode, setMode] = useState(false)
  const screen = useRef(null)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const [boxVisible, setBoxVisible] = useState(false)

  useEffect(() => {
    screen.current.focus()
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleKeyUp = (e) => {
    if (e.key === 'c') {
      setMode(!mode)
      setBoxVisible(false)
    }
    if (e.key === 'Escape') {
      setBoxVisible(false)
    }
  }

  const handleMouseMove = (e) => {
    if (mode) {
      setPosition({
        x: [e.pageX, e.clientX],
        y: [e.pageY, e.clientY]
      })
    }
  }

  const handleClick = () => {
    if (mode) {
      setBoxPosition({
        x: position.x[0],
        y: position.y[0]
      })
      setBoxVisible(true)
    }
  }

  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible
  }
  return (
    <MainContext.Provider value={data}>

      <div
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        ref={screen}
        tabIndex={0}
        onKeyUp={handleKeyUp}
        className={`
      overflow-auto
      ${mode && 'cursor-crosshair'}
      `}
      >
        <img src="https://framerusercontent.com/images/g3JeyNK2QoJaa2fF93h82aBgaU.png" alt="" />
        {mode && <LeaveComponentText />}
        {notes && notes.map((note) => <Note note={note} />)}
        {boxVisible && <NoteBox />}
      </div>
    </MainContext.Provider>
  )
}

export default App
