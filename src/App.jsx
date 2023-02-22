import React from 'react'
import NavBar from '../src/Components/NavBar'
import BestSellers from './Components/BestSellers'
import Collections from './Components/Collections'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Newsletter from './Components/Newsletter'
import AllProducts from './Pages/AllProducts'
import { Routes, Route } from "react-router-dom"
import SingleProduct from './Pages/SingleProduct'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Collections />
            <BestSellers />
            <Newsletter />
          </> } 
        />
        <Route path="/products/:productId" element={<SingleProduct />}/>
        <Route path="/all" element={<AllProducts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
