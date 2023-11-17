import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import { deleteProductToCart } from '~/app/api/cart/cart.api'
import { message, Popconfirm } from 'antd'
import ButtonComponent from '~/app/components/parts/button/button.component'
import QuantityCart from '~/app/components/parts/quantity/quantity-cart.component'

const InfoCart = () => {
  const {
    data: { carts,listBuyProduct },
    actions
  } = useCartRedux()

  useEffect(() => {
    actions.getAllCarts()
  }, [])
  const confirm = (id: any) => {
    deleteProductToCart(id).then((res) => {
      if (res) {
        actions.deleteProductTocarts(id)
      }
    })
    message.success('Product successfully removed from cart')
  }

  const cancel = (e: any) => {
    message.error('cancelled')
  }
  const handleSelectBuyProduct = (product: any) => {
    actions.selectProductCartBuy(product)
  }

  const handleSelectBuyProductAll = (product: any) => {
    actions.selectProductCartBuyAll(product)
  }

  const isCheckedAll = listBuyProduct.length >= carts.length && listBuyProduct.every((itembuy: any) => carts.some((items: any) => items._id == itembuy._id))
  return (
    <div className='w-[70%]' css={cssInfoCart}>
      <hr className='my-6' />
      <table className='w-full m-auto'>
        <thead>
          <tr className='text-[#595959]'>
            <th className='taitle-table sm:flex max-sm:flex px-5 font-mono py-3'>
              <input type='checkbox' className='w-[18px] mr-3' onChange={() => handleSelectBuyProductAll(carts)}  checked={isCheckedAll} />
              <a className='font-semibold' href='#'>
                Select all
              </a>
            </th>
            <th className='taitle-table font-semibold'>Information</th>
            <th className='taitle-table font-semibold'>Unit price</th>
            <th className='taitle-table font-semibold'>Quantity</th>
            <th className='taitle-table font-semibold'>Into money</th>
            <th className='remove-all'>
              <RiDeleteBin5Line size={17} className='delete-icon' />
            </th>
          </tr>
        </thead>

        <tbody className='' >
          {carts?.map((item: any, index: any) => (
            <tr className='' key={index + 1}>
              <td className='flex items-center space-x-3'>
                <input type='checkbox' className='sm:w-[18px] sm:mr-4 sm:ml-5 max-sm:ml-6 max-sm:mr-2' onChange={() => handleSelectBuyProduct(item)}
                 checked={listBuyProduct?.flatMap((items: any) => items._id)?.includes(item?._id)} />
                <img src={item?.product?.images?.slice(0, 1).map((image: any) => image?.response || image?.url)} alt='' className='w-[70px] h-[105px] my-2' />
              </td>
              <td className=''>
                <span className='truncate-text flex'>{item?.product?.name}</span>
                <span>by <a className='underline hover:text-[#BF0000]' href="#">{item?.product?.author}</a></span>
              </td>
              <td>
                <span className='font-bold'>${item?.product?.newPrice}</span>
              </td>
              <td>
                <span><QuantityCart quantity={item?.quantity} itemProductCart={item}/></span>
              </td>
              <td>
                <span className='text-[#BF0000] font-bold'>${item?.product?.newPrice*item.quantity}</span>
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
  .truncate-text {
    white-space: nowrap;     
    overflow: hidden;         
    text-overflow: ellipsis;   
    max-width: 200px;         
}
`
