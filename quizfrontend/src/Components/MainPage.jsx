import React from 'react'
import NavBar from './NavBar'
import Button from './Button'
import Questions from './Questions'

const MainPage = () => {
  return (
    <div className='border-2 border-black w-screen h-screen '>
      <div>
        <NavBar />

      </div>
      <div className=' flex items-center justify-center mt-20 '>
        {/* <Button label="Submit" /> */}
        <Questions />
      </div>


    </div>

  )
}

export default MainPage