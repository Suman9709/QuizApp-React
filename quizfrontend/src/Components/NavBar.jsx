import React, { useState } from 'react'
import logo from '../Images/shivalik-logo.png'
import nacc from '../Images/nacc-grade.png'
import Button from './Button'
const NavBar = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(prev => !prev)
  }
  return (
    <div className='flex w-full bg-cyan-700 h-20 pl-2 pr-4 justify-between items-center'>
      <div className='flex  items-baseline justify-center '>
        <img src={logo} alt="" className='h-16' />
        <img src={nacc} alt="" className=' h-10' />
      </div>
      <div onClick={handleClick} className='border-1 border-white rounded-full p-2 w-12 h-12 flex items-center justify-center cursor-pointer'>
        <span className='text-white text-xl' >P</span>
        {
          visible && (
            <div className='absolute top-18 right-2'>
              <Button label="Logout" />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar