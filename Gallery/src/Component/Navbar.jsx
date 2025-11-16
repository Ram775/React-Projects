import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div>
      <div className="bg-white flex items-center justify-between p-5">
        <h1 className='text-3xl font-bold cursor-pointer'>Gallery</h1>
        <div className="flex  items-center cursor-pointer justify-center text-xl font-semibold gap-5">
            <h2>Home</h2>
            <h2>Imgaes</h2>
            <h2>About us</h2>
            <h2>Contact us</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar
