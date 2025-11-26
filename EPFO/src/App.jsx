import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300 p-4'>
      <h1 className='text-3xl font-bold text-center text-blue-700 mb-8'>EPFO-FORM</h1>
      <div className=" bg-white w-full max-w-xl p-8 rounded-2xl shadow-2xl">
           <input className='border-2' type="tel" placeholder='Enter UAN'/>
      </div>
    </div>
  )
}

export default App
