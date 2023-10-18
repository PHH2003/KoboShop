import { FC, useEffect, useState } from 'react'
import { updateProductToCart } from '~/app/api/cart/cart.api'
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'

interface QuantityCartProps {
  quantity: number | string
  itemProductCart: any
}

const QuantityCart: FC<QuantityCartProps> = ({ quantity, itemProductCart }) => {
  const [quantityOrder, setQuantityOrder] = useState<any>()
  const { actions } = useCartRedux()
  useEffect(() => {
    setQuantityOrder(quantity)
  }, [quantity])

  useEffect(() => {
    if (itemProductCart) {
      if (quantityOrder > itemProductCart.quantity) {
        setQuantityOrder(itemProductCart.quantity)
      }
    }
  }, [itemProductCart])

  const handleDecrement = () => {
    const objectDecrement = {
      type: 'DECREMENT',
      quantityOrder,
      itemProductCart
    }
    actions.updateQuantityCart(objectDecrement)
    const requestQuantityCart = {
      productId: itemProductCart.product._id,
      quantity: quantityOrder - 1
    }
    updateProductToCart(requestQuantityCart)
  }
  const handleIncrement = () => {
    const objectIncrement = {
      type: 'INCREMENT',
      quantityOrder,
      itemProductCart
    }
    actions.updateQuantityCart(objectIncrement)
    const requestQuantityCart = {
      productId: itemProductCart.product._id,
      quantity: quantityOrder + 1
    }
    updateProductToCart(requestQuantityCart)
  }
  const changeInputQuantity = (event: any) => {
    const objectChangeInput = {
        type: "INPUTCHANGE",
        quantityOrder,
        itemProductCart,
        newDataInput: event.target.value
    }
    actions.updateQuantityCart(objectChangeInput)
    if (event.target.value.match('^[0-9]*$')) {
        if (event.target.value.trim() !== "" && Number(event.target.value.trim()) < 1) {
            setQuantityOrder(1)
        }
        else {
            if (Number(event.target.value) > itemProductCart.product.quantity) {
                setQuantityOrder(itemProductCart.product.quantity)
            }
            else {
                setQuantityOrder(event.target.value)
            }
        }
    }
    const requestQuantityCart = {
        productId: itemProductCart.product._id,
        quantity: event.target.value
    }
    updateProductToCart(requestQuantityCart)
}


  return (
    <div>
      <div className='flex border border-solid border-gray-300 max-w-max rounded-lg'>
        <div className='px-4 py-3 border-r border-solid border-gray-300 cursor-pointer hover:bg-red-200' onClick={handleDecrement}>-</div>
        <input type='text' value={quantityOrder} className='outline-none w-[40px] text-center focus:border-red-400'  onChange={changeInputQuantity} />
        <div className='px-4 py-3 border-l border-solid border-gray-300 cursor-pointer hover:bg-red-200' onClick={handleIncrement}>+</div>
      </div>
    </div>
  )
}

export default QuantityCart
