import React from 'react'
import Header from '../components/Header'

const Layout = ({children}) => {
    return (
        <div className='flex flex-col w-full bg-pink110 min-h-screen  md:px-[30px]  md:pb-5 '>
            <Header/>
            <div className='md:px-[30px] md:py-5 '>{children}</div>
        </div>
    )
}

export default Layout
