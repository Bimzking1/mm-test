import React from 'react'
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#FBFAF5] dark:bg-[#2e2e2e] z-10 border-t border-[#2e2e2e] dark:border-[#FBFAF5] duration-300'>
      <div className='bg-[#FBFAF5] dark:bg-[#2e2e2e] w-full xl:w-[1280px] text-[#2e2e2e] text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='w-full md:flex'>

            <div className='flex justify-center items-center md:items-start flex-col w-full md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4 lg:w-2/5'>
                <a href="#home" className='w-full flex flex-col justify-start items-center md:items-start'>
                    <div className="dark:hidden w-[300px] md:w-[200px] h-auto flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                        <Image
                            className="rounded-xl w-full h-full"
                            src={'/lorem.png'}
                            width={1000}
                            height={1000}
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden dark:flex w-[300px] md:w-[200px] flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                        <Image
                            className="rounded-xl w-full h-full"
                            src={'/lorem.png'}
                            width={1000}
                            height={1000}
                            alt="Logo"
                        />
                    </div>
                    <div className='text-[#106B6E] font-bold text-xl mt-4'>
                        Lorem Catalog
                    </div>
                </a>
                <div className='text-lg md:text-sm my-8 px-4 md:px-0 lg:w-4/5 text-gray-500 dark:text-gray-300 duration-300'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                    blanditiis praesentium voluptatum deleniti atque corrupti quos 
                    dolores et quas molestias excepturi sint occaecati cupiditate 
                    non provident, similique sunt in culpa qui officia deserunt mollitia 
                    animi, id est laborum et dolorum fuga.
                </div>
                <div className='flex flex-col md:flex-row justify-center md:justify-start py-4 gap-4'>
                    <div className='flex justify-center md:justify-start py-4 gap-4'>
                        <a href='https://www.lipsum.com/' target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                            <FaLinkedinIn style={{ width: '100%', height: '100%' }}/>
                        </a>
                        <a href='https://www.lipsum.com/' target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                            <FaInstagramSquare style={{ width: '100%', height: '100%' }}/>
                        </a>
                        <a href="https://www.lipsum.com/" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                            <FaFacebook style={{width: '100%', height: '100%'}} />
                        </a>
                    </div>
                    <div className='flex justify-center md:justify-start py-4 gap-4'>
                        <a href="https://www.lipsum.com/" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                            <FaXTwitter style={{width: '100%', height: '100%' }} />
                        </a>
                        <a href="https://www.lipsum.com/" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                            <FaTiktok style={{width: '100%', height: '100%'}} />
                        </a>
                        <a href="https://www.lipsum.com/" target="_blank" className='w-[40px] md:w-[30px] text-[#1c1c1c] dark:text-[#FBFAF5] duration-300'>
                            <FaYoutube style={{width: '100%', height: '100%' }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2 dark:text-gray-300 duration-300'>
                <div className='font-bold text-xl mb-2'>
                    Hunt Services
                </div>
                <div className='md:py-1'>
                    Finding Goods
                </div>
                <div className='md:py-1'>
                    Business Catalog
                </div>
                <div className='md:py-1'>
                    International
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2 dark:text-gray-300 duration-300'>
                <div className='font-bold text-xl mb-2'>
                    Products
                </div>
                <div className='md:py-1'>
                    Lorem App
                </div>
                <div className='md:py-1'>
                    Good Goods
                </div>
                <div className='md:py-1'>
                    World Catalog
                </div>
                <div className='md:py-1'>
                    Search Things
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2 dark:text-gray-300 duration-300'>
                <div className='font-bold text-xl mb-2'>
                    Download Our App
                </div>
                <div className='w-full flex justify-start items-start gap-4 px-4 md:px-0 md:flex-col'>
                    <a href="https://www.lipsum.com/" target="_blank"  className='flex justify-center items-center w-[300px] md:w-[200px] h-auto'>
                        <Image
                            className="rounded-xl w-full h-full"
                            src={'/lorem.png'}
                            width={1000}
                            height={1000}
                            alt="Logo"
                        />
                    </a>
                    <a href="https://www.lipsum.com/" target="_blank" className='flex justify-center items-center w-[300px] md:w-[200px] h-auto'>
                        <Image
                            className="rounded-xl w-full h-full"
                            src={'/lorem.png'}
                            width={1000}
                            height={1000}
                            alt="Logo"
                        />
                    </a>
                </div>
            </div>

        </div>
        <hr className='mt-8'/>
        <div className='text-center md:flex gap-8 text-xs mt-8 lg:px-4 dark:text-gray-300 duration-300'>
            <div className='mb-2'>
                © muatmuat - Bimo 2024. All Rights Reserved
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                About Us
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                User Agreement
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Privacy Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Terms of Services
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Cookie Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Copyright Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Brand Policy
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer