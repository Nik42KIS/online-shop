import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route index element = {<Home/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes