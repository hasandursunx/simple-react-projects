import React from 'react'
import MainContext from '../context/MainContext'
import { useContext } from 'react'
function LeaveComponentText() {

    const { position } = useContext(MainContext)

    return (
        <div
            className='
            bg-gray-500
            p-1
            -translate-y-1/2
            text-white
            rounded
            opacity-80
            
            '
            style={{ position: 'fixed', top: position.y[1], left: position.x[1] + 20 }}
        >Yorum Yazmak için tıklayın.</div>
    )
}

export default LeaveComponentText


//className={`relative left-[${position.x}]`}