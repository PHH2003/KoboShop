import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import { deleteProductToCart } from '~/app/api/cart/cart.api'
import { message, Popconfirm } from 'antd'
import ButtonComponent from '~/app/components/parts/button/button.component'

const InfoCart = () => {
  const {
    data: { carts },
    actions
  } = useCartRedux()

  useEffect(() => {
    actions.getAllCarts()
  }, [])
  console.log(carts);
  
  const confirm = (id: any) => {
    console.log(id)
    deleteProductToCart(id).then((res) => {
      if (res) {deleteProductToCart(id)
      }
    })
    message.success('Product successfully removed from cart')
  }

  const cancel = (e: any) => {
    console.log(e)
    message.error('cancelled')
  }

  return (
    <div className='w-[70%]' css={cssInfoCart}>
      <hr className='my-6' />
      <table className='w-full m-auto'>
        <thead>
          <tr className='text-[#595959]'>
            <th className='taitle-table sm:flex max-sm:flex px-5 font-mono py-3'>
              <input type='checkbox' className='w-[18px] mr-3 ' />
              <a className='font-semibold' href='#'>
                Select all
              </a>
            </th>
            <th className='taitle-table font-semibold'>Information</th>
            <th className='taitle-table font-semibold'>Unit price</th>
            <th className='taitle-table font-semibold'>Into money</th>
            <th className='remove-all'>
              <RiDeleteBin5Line size={17} className='delete-icon' />
            </th>
          </tr>
        </thead>

        <tbody >
          {carts?.map((item: any, index: any) => (
            <tr className='trbody' key={index + 1}>
              <td className='flex items-center space-x-3'>
                <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' />
                <img src='https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1' alt='' className='w-[70px] h-[80px]' />
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
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => confirm(item?._id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <RiDeleteBin5Line className='delete-icon' />
                </Popconfirm>

              </td>

            </tr>

          ))}

        </tbody>
      </table>

      <hr className='my-6' />
      <Link to={'/'}>
        {/* <button className='hover:bg-[#595959] bg-[#BF0000] text-white  py-2 px-4 rounded'>Continue shopping</button> */}
        <ButtonComponent handleColor title={"Continue shopping"} className='py-2 px-4 w-[166px] h-[40px] hover:bg-[#595959] rounded' />
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
