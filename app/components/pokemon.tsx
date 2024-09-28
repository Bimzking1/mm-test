import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokemonCard from './pokemonCard';
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const pokemon = () => {

    const router = useRouter()
    const [data, setData] = useState<
        Array<{
            name: string,
            url: string
        }>
    >([])
        
    useEffect(() => {
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon`,
        };
    
        axios.request(config)
        .then((response) => {
            setData(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return (
        <div className='flex flex-col justify-center items-center pt-8 pb-16 bg-[#FBFAF5] dark:bg-[#2e2e2e] duration-300 px-4'>
            <div className='flex gap-4 w-full xl:w-[1280px] justify-start items-center text-[#1c1c1c] dark:text-[#FBFAF5]'>
                <IoChevronBack
                    onClick={() => router.push('/')}
                    className='w-[30px] h-auto hover:w-[40px] duration-300 cursor-pointer'
                />
                <div className='text-xl font-semibold'>
                    Back
                </div>
            </div>
            <div className='h-full w-full xl:w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-2 px-2 xl:px-0 md:px-4'>
                {
                    data.map((datas, index) => {
                        return (
                            <PokemonCard key={index} index={index} name={datas.name} url={datas.url}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default pokemon