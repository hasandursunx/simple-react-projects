import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import RightBar from './rightbar/RightBar'
import { useModal } from '../../store/modal/hooks'
import Modal from '../../modals/modal'
import { useAppearance } from '../../store/appearance/hooks'

const MainLayout = () => {
    const modal = useModal();
    console.log('modal', modal);


    const appearance = useAppearance()
    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
        document.documentElement.style.setProperty('--background-primary-alpha', appearance.backgroundColor.primaryAlpha)
        document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
        document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
        document.documentElement.style.setProperty('--background-modal', appearance.backgroundColor.modal)

        document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
        document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
        document.documentElement.style.setProperty('--color-base', appearance.color.base)
        document.documentElement.style.setProperty('--color-base-secondary', appearance.color.baseSecondary)

        document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)


        document.documentElement.style.setProperty('--font-size', appearance.fontSize + "px")

    }, [appearance])

    return (
        <div div className='w-[1265px] mx-auto flex' >
            {modal && <Modal />
            }
            <Sidebar />
            <main className='flex-1 flex gap-x-[30px]'>
                <main className='flex-1 max-w-[600px] border border-x border-y-0 border-[color:var(--background-third)] '>
                    <Outlet />
                </main>
                <RightBar />
            </main>

        </div>
    )
}

export default MainLayout