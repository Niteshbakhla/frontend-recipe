import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { Toaster, toast } from "react-hot-toast";


const Signup = () => {
            const [name, setName] = useState('');
            const [email, setEmail] = useState('');
            const [phone, setPhone] = useState('');
            const [password, setPassword] = useState('');
            const [errors, setErrors] = useState('');
            const navigate = useNavigate();

            const handleSubmit = async (e) => {
                        e.preventDefault();

                        const formData = {
                                    username: name,
                                    email: email,
                                    phoneNumber: phone,
                                    password: password
                        };


                        try {
                                    const res = await axios.post("https://serverrecipe-8ovb.onrender.com/api/signup", formData);
                                    console.log(res)

                                    if (!res.data.success) {
                                                return toast.error(res.data.message)
                                    }
                                    toast.success(res.data.message);
                                    setName("");
                                    setEmail("");
                                    setPassword("");
                                    setPhone("");

                                    setInterval(() => {
                                                navigate("/login")
                                    }, 1000);
                                    // navigate("/login");
                        } catch (error) {
                                    setErrors(error.response.data);
                        }
            };

            return (
                        <>
                                    <Toaster position="top-center" reverseOrder={false} />
                                    <div className="h-[70vh] items-center flex justify-center px-5 lg:px-0">

                                                <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">

                                                            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                                                                        <div className="flex flex-col items-center">
                                                                                    <div className="text-center">
                                                                                                <h1 className="text-2xl xl:text-4xl font-extrabold text-green-600">
                                                                                                            Foodie Sign up
                                                                                                </h1>
                                                                                                <p className="text-[12px] text-gray-500">
                                                                                                            Hey, enter your details to create your account
                                                                                                </p>
                                                                                    </div>
                                                                                    <div className="w-full flex-1 mt-8">
                                                                                                <form onSubmit={handleSubmit} className="mx-auto max-w-xs flex flex-col gap-4">
                                                                                                            <input
                                                                                                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                                                                                        type="text"
                                                                                                                        placeholder="Enter your name"
                                                                                                                        value={name}
                                                                                                                        onChange={(e) => setName(e.target.value)}
                                                                                                            />
                                                                                                            <input
                                                                                                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                                                                                        type="email"
                                                                                                                        placeholder="Enter your email"
                                                                                                                        value={email}
                                                                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                                                            />

                                                                                                            <input
                                                                                                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                                                                                        type="password"
                                                                                                                        placeholder="Password"
                                                                                                                        value={password}
                                                                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                                                            />
                                                                                                            <button
                                                                                                                        type="submit"
                                                                                                                        className="mt-5 tracking-wide font-semibold bg-green-600 text-gray-100 w-full py-4 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                                                                                            >
                                                                                                                        <span>Sign Up</span>
                                                                                                            </button>
                                                                                                </form>
                                                                                                <p className="mt-6 text-xs text-gray-600 text-center">
                                                                                                            Already have an account?{" "}
                                                                                                            <Link to="/login">
                                                                                                                        <span className="text-green-900 font-semibold">Sign in</span>
                                                                                                            </Link>
                                                                                                </p>
                                                                                    </div>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </>
            );
};

export default Signup;
