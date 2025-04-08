import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'


function App() {
  const [count, setCount] = useState(0)
  

  return (

    <>

    <Login/>
    <Logout/>
    </>
  )
}

export default App
