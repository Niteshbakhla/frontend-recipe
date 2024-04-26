import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'
import RecipeDetail from './pages/RecipeDetail'
import Navbar from './components/Navbar'
import { ContextProvider } from './Mycontext'



function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();


  useEffect(() => {
    navigate('/signup');
  }, []);

  return (
    <ContextProvider>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Singup />} />
          <Route path='/' element={<Home />} />
        </Route>

      </Routes>
    </ContextProvider>

  )
}

export default App
