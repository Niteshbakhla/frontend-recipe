import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from "react-icons/io5";
import { MdLibraryAdd, MdLibraryAddCheck } from "react-icons/md";
const Cards = ({ meal, id, img }) => {
            const [click, setClick] = useState(false)

            const addtofavourite = async (data) => {

                        setClick(true);
                        // const res = await axios.post(`http://localhost:3000/api/addtofavourite/${id}`, { meal: meal, id: id, img: img }, { Credential: true })
                        console.log(data)
                        toast.success("Successfully Added")
            }

            const removefavourite = () => {
                        toast.success("Removed Successfully")
                        setClick(false)
            }
            return (
                        <>
                                    <Toaster position='top-center' />
                                    <div className="w-[180px] lg:w-[22vw]  md:w-[30vw] lg:h-[300px] border border-green-600 
                        rounded-xl overflow-hidden shadow-lg bg-white m-2 ">
                                                <img className="w-full h-[30vh]" src={img} alt="" />
                                                <div className="px-6 py-4 flex justify-between items-center">

                                                            <p className="text-gray-700 text-base sm:text-sm md:text-base lg:text-base xl:text-lg">
                                                                        {/* {data.slice(0, 20)} {data.length > 20 ? "............" : "null"} */}

                                                                        {meal}
                                                            </p>

                                                </div>
                                                <div className='w-full flex items-center justify-center'>
                                                            {click ? (
                                                                        <MdLibraryAddCheck size={24} color='green' onClick={removefavourite} className='cursor-pointer' />
                                                            )
                                                                        :
                                                                        (
                                                                                    <MdLibraryAdd onClick={() => addtofavourite({
                                                                                                idMeal: id,
                                                                                                strMeal: meal,
                                                                                                strMealThumb: img
                                                                                    })}
                                                                                                size={24} color='green' className={`cursor-pointer ${click ? "rotate-180" : "rotate-180"} `} />
                                                                        )}
                                                </div>
                                    </div>
                        </>
            )
}

export default Cards