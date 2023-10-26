import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'
import { useCartRedux } from '../../../redux/hook/useCartReducer'


const ProductOrderComponent = () => {
    const { data: { listBuyProduct } } = useCartRedux()
    
    return (
        <div>
            <h2 className='text-[17px] font-semibold text-red-700 mb-4'>Items product</h2>

            <div className='border border-gray-400 p-5 bg-[#e9f5f4] '>
                <p>You’re buying eBooks
                    You’re about to purchase digital content rather than physical books. Read with a Kobo eReader or with the free Kobo App.</p>
            </div>

            {listBuyProduct?.map((item: any, index: any) => (
                    <div className='flex items-center justify-between mt-4' key={index + 1}>
                        <div className='w-[55px]'>
                            <img src={item?.product?.images} alt="" className='w-[70px] h-[80px]' />
                        </div>
                        <div className='font-semibold'>
                            x {item?.quantity}
                        </div>
                        <div className='w-[300px]'>
                            <h2 className='font-semibold'>{item?.product?.name}</h2>
                            <p className='text-gray-500 text-[15px]'>by {item?.product?.author}</p>
                        </div>

                        <div className='font-bold text-[20px] w-[65px]'>
                            ${item?.quantity * item?.product?.newPrice}
                        </div>
                    </div>
                ))}

            <div>
                <ButtonComponent handleColor className="w-[200px] mt-6" title={"save and continue"} />
            </div>
        </div>
    )
}

export default ProductOrderComponent