import React, { useContext, useState } from 'react'
import Draggable from 'react-draggable';
import MainContext from '../context/MainContext';

function Note({ note }) {
    const [visible, setVisible] = useState(false)
    const { setMode, notes, setNotes } = useContext(MainContext);
    const [clickable, setClickable] = useState(true)
    const [notMove, setNotMove] = useState(false)

    const showNote = () => {
        if (clickable) {
            setVisible(!visible)
            setNotMove(false)
        }
    }

    const setNotePosition = (e, data) => {
        /*const currentNote = notes.find(n => n.number === note.number)
        setNotes([...notes.filter(n => n.number !== note.number), currentNote])*/
        if (notMove) {
            const newNotes = notes.map(n => {
                if (n.number === note.number) {
                    n.position = {
                        x: e.clientX,
                        y: e.clientY
                    }
                }
                return n
            })
            setNotes(newNotes)
        }


    }
    return (
        <Draggable
            position={{ x: 0, y: 0 }}
            onDrag={() => { setClickable(false); setNotMove(true) }}
            onStart={() => setClickable(true)}
            onStop={setNotePosition}

        >
            <div
                onMouseEnter={() => setMode(false)}
                onMouseLeave={() => setMode(true)}
                style={{
                    background: note.color,
                    position: 'absolute',
                    top: note.position.y,
                    left: note.position.x,
                    width: '300px',
                    marginTop: '40px',
                    marginLeft: '-150px'
                }}
            >

                <span

                    onClick={showNote}
                    className='
                absolute
                top-0
                left-1/2
                w-[40px]
                h-[40px]
                -translate-x-1/2
                rounded-full
                flex
                justify-center
                items-center
                dotSpan
                opacity-70
                hover:opacity-100
                cursor-pointer
                '
                    style={{ background: note.color }}
                >{note.number}</span>



                <div style={{
                    width: '300px',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    color: '#fff', display: visible ? 'flex' : 'none'
                }}>{note.note}</div>

            </div >
        </Draggable>
    )
}

export default Note