import React from 'react'
import { Link } from 'react-router-dom'

const LinkCart = () => {
  return (
    <div>
        <div>
            <span className='text-[0.9rem] flex italic font-serif mt-3 text-sm'>
                <Link to={'/'}><a className='underline mr-1 hover:text-[#BF0000]'>Home</a></Link>/
                <p className='text-[#595974] ml-1'>Cart</p>
            </span>
        </div>
    </div>
  )
}

export default LinkCart