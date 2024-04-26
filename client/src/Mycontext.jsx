import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
            const [searchTerm, setSearchTerm] = useState("egg");
            const [recipe, setRecipe] = useState([])


            const getRecipe = async () => {
                        try {
                                    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`);
                                    setRecipe(res.data.meals)

                        } catch (error) {
                                    setError("Failed to fetch recipes. Please try again later.");
                                    console.log(error)

                        }
            };
            const handleChange = (event) => {
                        setSearchTerm(event.target.value);
            };

            return (
                        <MyContext.Provider value={{ searchTerm, setRecipe, getRecipe, recipe, setSearchTerm, handleChange }}>
                                    {children}
                        </MyContext.Provider>
            );
};

export const useTheme = () => {
            return useContext(MyContext);
};
