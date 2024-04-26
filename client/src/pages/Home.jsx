import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from "axios"
import { useTheme } from '../Mycontext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {
            const navigate = useNavigate()

            const { getRecipe, setRecipe, recipe } = useTheme()




            useEffect(() => {
                        getRecipe();
            }, [])





            return (
                        <div className='m-auto grid gap-10 grid-cols-2  md:grid-cols-3 lg:grid-cols-3 w-[80%] min-h-screen-[100vh] place-items-center '>
                                    {recipe === null ? <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-3xl '>No recipe  found</h1> : recipe.map((val, index) => {
                                                return < Cards key={index} meal={val.strMeal} id={val.idMeal} img={val.strMealThumb} />
                                    })}
                        </div>
            )
}

export default Home