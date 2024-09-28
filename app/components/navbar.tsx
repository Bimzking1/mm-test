"use client"

import React from 'react'
import Image from "next/image";
import DarkModeSwitcher from '../components/DarkModeSwitcher';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const navbar = () => {

    const router = useRouter()

  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#FBFAF5] dark:bg-[#2e2e2e] z-50 duration-300'>
        <div className='px-4 w-full flex justify-center items-center border-b border-[#FBFAF5] py-4 h-fit bg-[#FBFAF5] dark:bg-[#2e2e2e] duration-300 shadow'>
            <div className='w-full xl:w-[1280px] flex flex-row justify-between items-center'>
                <div className="dark:hidden flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5] duration-300 cursor-pointer">
                    <Image
                        className="rounded-xl"
                        src={'/lorem.png'}
                        width={100}
                        height={100}
                        style={{ height: '80%', width: '80%' }}
                        alt="Logo1"
                    />
                </div>
                <div className="hidden dark:flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5] duration-300 cursor-pointer">
                    <Image
                        className="rounded-xl"
                        src={'/lorem.png'}
                        width={100}
                        height={100}
                        style={{ height: '80%', width: '80%' }}
                        alt="Logo2"
                    />
                </div>
                <div className='flex justify-center items-center gap-2 md:gap-4'>
                    <div
                        onClick={() => router.push('/pokemon')}
                        className='h-[40px] w-auto hover:h-[52px] duration-300 cursor-pointer'
                    >
                        <Image
                            className="rounded-xl h-full w-auto"
                            src={'/pokemon.png'}
                            width={1000}
                            height={1000}
                            alt="Logo2"
                        />
                    </div>
                    <div className='w-fit flex justify-end'>
                        <DarkModeSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar