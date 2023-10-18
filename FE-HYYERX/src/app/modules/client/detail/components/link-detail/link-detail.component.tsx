import React from 'react'
import { Link } from 'react-router-dom'

const LinkDetail = () => {
  return (
    <div>
        <div>
            <span className='text-[0.9rem] flex italic font-serif mt-3 text-sm'>
                <Link to={'/'}><a className='underline mr-1'>Home </a></Link>/
                {/* <a href="#" className='underline ml-1 mr-1'>eBooks </a>/
                <a href="#" className='underline ml-1 mr-1'> Fiction & Literature </a>/ */}
                <p className='text-[#595974] ml-1'> Her Hidden Shadow </p></span>
        </div>
    </div>
  )
}

export default LinkDetail