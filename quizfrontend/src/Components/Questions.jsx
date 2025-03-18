import React from 'react'
import Button from './Button'

const Questions = () => {
    return (
        <div className='question-section flex  flex-col  w-1/2 border-2 p-2'>
            <div>
                <div>
                    <p>1. This is question 1</p>
                </div>
                <div className='flex flex-col pl-4' >
                    <div className='flex gap-4 items-center '>
                        <input type="radio" id="html" name='q1' value='HTML' />
                        <label htmlFor="html">HTML</label>
                    </div>

                    <div className='flex gap-4 items-center '>
                        <input type="radio" id='css' name='q1' value='CSS' />
                        <label htmlFor="css">CSS</label>
                    </div>

                    <div className='flex gap-4 items-center '>
                        <input type="radio" id='js' name='q1' value='JS' />
                        <label htmlFor="js">JS</label>
                    </div>
                    <div className='flex gap-4 items-center '>

                        <input type="radio" id='cpp' name='q1' value='CPP' />
                        <label htmlFor="cpp">CPP</label>
                    </div>
                </div>
            </div>

            <div className='w-full flex  justify-between p-4'>
                <Button label="Prev" />
                <Button label="Next" />
            </div>

        </div>
    )
}

export default Questions