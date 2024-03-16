"use client"
import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
}));


const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-8 gap-4 py-4 sm:w-full '>
            <div className='lg:col-span-2 col-span-1 shadow-lg bg-[#ffffff]  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-r-blue-400 border-r-4  '>
                <div className='flex flex-col w-full m-4'>
                    <p className='text-2xl font-bold text-gray-600'>KSHS 7846</p>
                    <p className='text-gray-600'>Daily Revenue</p>

                </div>
                <p className='bg-blue-200 flex justify-center items-center p-2 '>
                    <span className='text-gray-700 text-2xl font-bold text-gray-600'>+21%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 shadow-lg bg-[#ffffff]  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-r-red-400 border-r-4 '>
                <div className='flex flex-col w-full m-4'>
                    <p className='text-2xl font-bold text-gray-600'>546</p>
                    <p className='text-gray-600'>Users</p>

                </div>
                <p className='bg-red-200 flex justify-center items-center p-2 '>
                    <span className='text-gray-700 text-2xl font-bold text-gray-600'>+11%</span>
                </p>
            </div>
            <div className='lg:col-span-2  col-span-1 shadow-lg bg-white  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-r-green-500 border-r-4 '>
                <div className='flex flex-col w-full pb-4 m-4'>
                    <p className='text-2xl font-bold text-gray-600'>876</p>
                    <p className='text-gray-600'>Transactions</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 '>
                    <span className='text-gray-700 text-2xl font-bold text-gray-600'>+18%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 shadow-lg bg-white  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-r-gray-400 border-r-4 '>
                <div className='flex flex-col w-full p-4'>
                    <p className='text-2xl font-bold text-gray-600'>11,784</p>
                    <p className='text-gray-700'>Customers</p>

                </div>
                <p className='bg-gray-200 flex justify-center items-center p-4 '>
                    <span className='text-gray-700 text-2xl font-bold text-gray-600'>+17%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards
