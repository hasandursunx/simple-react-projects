import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import RightBar from './rightbar/RightBar'

const MainLayout = () => {
    return (
        <div className='w-[1265px] mx-auto flex'>
            <Sidebar />
            <main className='flex-1 flex gap-x-[30px]'>
                <main className='flex-1 max-w-[600px] border border-x border-y-0 border-[#2f3336] '>
                    <Outlet />
                </main>
                <RightBar />
            </main>

        </div>
    )
}

export default MainLayout