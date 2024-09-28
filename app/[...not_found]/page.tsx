import React from 'react'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";

const page = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
        <div className='text-7xl font-semibold mb-4'>404</div>
        <div className='text-2xl font-semibold'>Page Not found</div>
        <div className='text-xl font-semibold'>
            <Link href="/" className='flex justify-center items-center gap-4 text-[#FBFAF5] hover:text-black duration-300 py-8 px-8'>
                <FaHome className='w-[40px] h-[40px]'/>
                <div className=''>
                    Go back to Home
                </div>
            </Link>
        </div>
    </div>
  )
}

export default page