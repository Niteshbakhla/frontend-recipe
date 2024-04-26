import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import chiefImage from "../assets/chief.png"
import Input from './Input'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


const Navbar = () => {
  const location = useLocation()
  const navigation = useNavigate()

  const logout = async () => {
    const res = await axios.get("https://serverrecipe-8ovb.onrender.com/api/logout")

    if (!res.data.success) {
      toast.success(res.data.message)
      return setTimeout(() => {
        navigation("/login")
      }, 1000);
    }
  }
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className=' sticky top-0 z-50 left-0 backdrop-blur-sm w-[100vw] m-auto  '>
        <nav className="   ">
          <div className="max-w-6xl mx-auto px-4  ">
            <div className="flex justify-between  ">
              <div className="flex space-x-4">
                <div >
                  <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <img className='w-[50px]' src={chiefImage} alt="" />
                    <span className="font-bold ">SpiceSpot</span>
                  </Link>
                </div>
                <div className={`grid ${location.pathname === "/signup" || location.pathname === "/login" ? "hidden" : "block"}`}>
                  <Input />
                </div>

              </div>

              <div className="hidden md:flex items-center space-x-1">

                <Link to="/signup" className={`py-2 px-6 
                                            rounded-lg transition duration-300 ${location.pathname === "/signup" ? "bg-[#21c31bc0] text-white" : "bg-white"}`}>Signup</Link>


                {location.pathname === "/" ? (
                  <Link onClick={logout} className={`py-2 px-6 rounded-lg active:bg-[#21c31bc0] active:text-white`}> logout</Link>
                ) : (
                  <Link to="/login" className={`py-2 px-6 rounded-lg 
                                                                                                                        ${location.pathname ===
                      "/login" ? "bg-[#21c31bc0] text-white" : "bg-white"}`}> Login</Link>
                )}



              </div>

              <div className="md:hidden flex items-center ">
                <button className="mobile-menu-button" >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav >
        {/* Responsive Menu */}
      </div >
      {/* <div className={`mobile-menu md:hidden w-full h-[85vh] ${isMobileMenuOpen ? '' : 'hidden'}`}>
                                                <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200 ">Home</Link>
                                                <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
                                                <Link to="/login" className="block py-2 px-4 text-sm hover:bg-gray-200">Login</Link>
                                                <Link to="/signup" className="block py-2 px-4 text-sm hover:bg-gray-200">Signup</Link>
                                                <Link to="/favourite" className="block py-2 px-4 text-sm hover:bg-gray-200">Favorites</Link>
                                    </div> */}

      < Outlet />
    </>
  )
}

export default Navbar