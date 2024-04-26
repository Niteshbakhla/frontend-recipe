import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useTheme } from '../Mycontext';

const Input = () => {

            const { setSearchTerm, handleChange, searchTerm, getRecipe } = useTheme()

            const handleSubmit = (event) => {
                        event.preventDefault();
                        getRecipe();
            };

            return (
                        <form onSubmit={handleSubmit} className="sticky   overflow-hidden px-4 
                        flex items-center 
                        justify-center w-[40vw] h-[5vh] m-auto
                         border-[2px] focus-within:border-green-800
                          rounded-full border-gray-300 ">
                                    <input
                                                type="text"
                                                placeholder="Search the ingredients"
                                                value={searchTerm}
                                                onChange={handleChange}
                                                className="w-full h-full pl-2 pr-4 py-2 focus:outline-none text-gray-800 bg-transparent"
                                                autoFocus
                                    />
                                    <div>
                                                <IoSearchOutline onClick={handleSubmit} className='cursor-pointer' />
                                    </div>
                        </form>
            )
}

export default Input