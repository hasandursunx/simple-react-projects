import React, { useContext, useState } from 'react'
import MainContext from '../context/MainContext'

function NoteBox() {

    const types = [
        {
            name: 'comment',
            color: 'red',
            text: 'Yorum'
        },
        {
            name: 'private-comment',
            color: 'yellow',
            text: 'Gizli Yorum'
        },
        {
            name: 'note',
            color: 'orange',
            text: 'Not'
        }
    ]
    const { boxPosition, setMode, notes, setNotes, setBoxVisible } = useContext(MainContext);
    const [color, setColor] = useState(types[0].color)
    const changeColor = (e) => {
        setColor(e.target.value)
    }
    const [note, setNote] = useState('')


    const addNote = () => {

        const currentNote = {
            note,
            number: notes.length + 1,
            color: color,
            position: {
                x: boxPosition.x,
                y: boxPosition.y
            }
        }
        setBoxVisible(false)
        setNotes([...notes, currentNote])
        setMode(true)
    }


    return (
        <div
            onMouseEnter={() => setMode(false)}
            onMouseLeave={() => setMode(true)}
            className='
            p-4
            bg-white
            shadow-md
            z-[4]
            w-[300px]
            dotNoteBox
        '
            style={{ position: 'absolute', top: boxPosition.y, left: boxPosition.x }
            }>

            <span
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
                style={{ '--color': color, background: 'var(--color)' }}
            >{notes.length + 1}</span>
            <select
                onChange={changeColor}
                className='
            appearance-none
            border-solid
            border-[1px]
            border-gray-300
            outline-none
            px-3
            py-1
            rounded
            text-center
            cursor-pointer
            mb-2

            '
            >
                {types.map(type => (<option value={type.color}>{type.text}</option>))}
            </select>
            <textarea
                onChange={e => setNote(e.target.value)}
                cols={25}
                rows={5}
                className='
                border-solid
                border-[1px]
                outline-none
                p-4
                '
            ></textarea>
            <button
                onClick={addNote}
                disabled={!note}
                className='
            w-full
            h-[40px]
            rounded-md
            border-solid
            border-[1px]
            cursor-pointer
            hover:bg-gray-300
            text-lg
            disabled:opacity-40
            disabled:cursor-default
            disabled:bg-gray-200
            '
            >Ekle</button>
        </div >
    )
}

export default NoteBox