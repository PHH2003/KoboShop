import { css } from '@emotion/react'
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const InfoCart = () => {
  return (
    <div className='w-[70%]' css={cssInfoCart}>
      <hr className='my-6' />
      <table className='w-full m-auto'>
        <thead>
          <tr className='text-[#595959]'>
            <th className='taitle-table sm:flex max-sm:flex px-5 font-mono py-3'>
              <input type='checkbox' className='w-[18px] mr-3 ' />
              <a className='font-semibold' href='#'>Select all</a>
            </th>
            <th className='taitle-table font-semibold'>Information</th>
            <th className='taitle-table font-semibold'>Unit price</th>
            <th className='taitle-table font-semibold'>Into money</th>
            <th className='remove-all'>
              <RiDeleteBin5Line size={17} className='delete-icon' />
            </th>            
          </tr>
        </thead>

        <tbody>
          <tr className='trbody'>
            <td className='flex items-center space-x-3 mt-7'>
              <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' />
              <img src='https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1' alt='' className='w-[100px] h-[150px]' />
            </td>
            <td className=''>
              <span className='flex'>Her Hidden Shadow</span>
              <span>by <a className='underline hover:text-[#BF0000]' href="#">Carla Kovach</a></span>
            </td>
            <td>
              <span className='flex'>radioBook: $14,9</span>
            </td>
            <td>
              <span>$14,9</span>
            </td>
            <td className='product-delete'>
              <RiDeleteBin5Line className='delete-icon'/>
            </td>
          </tr>
        </tbody>
          
      </table>
      
      <hr className='my-6' />
      <Link to={"/"}>
      <button className='hover:bg-[#595959] bg-[#BF0000] text-white  py-2 px-4 rounded'>Continue shopping</button>
      </Link>
    </div>
  )
}

export default InfoCart

const cssInfoCart = css`
  .taitle-table {
    text-align: left;
    font-size: 18px;
  }
  .delete-icon:hover {
    color: red;
  }
`
