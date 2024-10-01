import React from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center mb5'>
            <Link to="/" className='text-xl font-semibold'>Home. </Link>
            <div className='relative w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center'>
                <img src={iconCart} alt="" className='w-6' />
                <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>0</span>
            </div>
        </header>
    )
}

export default Header