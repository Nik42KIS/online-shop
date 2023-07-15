import React, { useEffect } from 'react'
import AppRoutes from '../../Routes/Routes'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import { useDispatch } from 'react-redux'
import { getCatigories } from '../../features/categories/categoriesSlice'
import { getProducts } from '../../features/products/productsSlice'



const App = () => {

  const dispatch = useDispatch()

  useEffect(() =>
      {
        dispatch(getCatigories());
        dispatch(getProducts());
      }, [dispatch])


  return (
    <div className='app'>
      <Header/>
      <div className="container">

      <Sidebar/>
      <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App  