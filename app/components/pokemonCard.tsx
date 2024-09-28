"use client";

import axios from 'axios';
import Image from "next/image";
import React, { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Props {
    index: number,
    name: string,
    url: string
  }

const pokemonCard = (props: Props) => {
        
    const [imageUrl, setImageUrl] = useState<string>('');
    const [experience, setExperience] = useState<number>();
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: props.url,
        };
    
        axios.request(config)
        .then((response) => {
            // console.log('res child: ', response)
            setHeight(response.data.height)
            setExperience(response.data.base_experience)
    
            setTimeout(() => {
                setImageUrl(response.data.sprites.front_default)
            }, 2000);
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return (
        <>
            {
                imageUrl === '' ?
                <Skeleton className='rounded-2xl w-full h-[300px]' />
                :
                <div key={props.index} className='rounded-lg shadow-md hover:shadow-2xl duration-500 py-4 relative text-black flex flex-col justify-center items-center cursor-pointer bg-[#ececec] dark:bg-[#3a3a3a] dark:text-[#FBFAF5]'>
                    <Image
                        src={imageUrl}
                        className="rounded-xl bg-[#ffffff] hover:bg-[#DCFCE4] duration-500 dark:bg-[#6b6b6b] dark:hover:bg-[#969696]"
                        width={100}
                        height={100}
                        style={{ height: '80%', width: '80%' }}
                        alt="Logo1"
                    />
                    <div className='w-full px-[30px] flex justify-between'>
                        <div className='flex justify-center items-center text-2xl font-bold p-2'>
                            {props.name}
                        </div>
                        <div className='flex justify-center items-center text-sm font-normal p-2'>
                            Size: {height}
                        </div>
                    </div>
                    <div className='bg-[#2e2e2e] text-[#FBFAF5] absolute bottom-[80px] right-[40px] font-semibold px-4 py-2 rounded-xl hover:bg-[#505050] duration-300'>
                        XP: {experience}
                    </div>
                </div>
            }
        </>
    )
}

export default pokemonCard