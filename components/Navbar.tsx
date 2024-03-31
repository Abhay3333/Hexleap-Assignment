import React from 'react'
import { Toggle } from './Toggle'

export const Navbar = () => {
    return (
        <nav className='flex flex-col items-end border-b py-5 bg-secondary '>
            <div className='flex justify-end max-w-6xl w-full'>
                <div className='flex items-end mr-8'>
                    <Toggle />
                </div>

            </div>
        </nav>
    )
}

