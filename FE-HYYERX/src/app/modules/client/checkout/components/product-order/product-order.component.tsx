import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'


const ProductOrderComponent = () => {
    return (
        <div>
            <h2 className='text-[17px] font-semibold text-red-700 mb-4'>Items product</h2>

            <div className='border border-gray-400 p-5 bg-[#e9f5f4] '>
                <p>You’re buying eBooks
                    You’re about to purchase digital content rather than physical books. Read with a Kobo eReader or with the free Kobo App.</p>
            </div>

            <div className='flex justify-between mt-4'>
                <div>
                    <img src="https://thebookdata.net/wp-content/uploads/2021/02/sach-suc-manh-cua-tinh-tam-207x300.png" alt="" className='w-[70px] h-[100px]' />
                </div>
                <div>
                    <h2 className='font-semibold'>The Armor of Light</h2>
                    <p className='text-gray-500 text-[15px]'>by Ken Follett</p>
                </div>

                <div className='font-bold text-[20px]'>
                    $10.09
                </div>
            </div>

            <div className='flex justify-between mt-4'>
                <div>
                    <img src="https://thebookdata.net/wp-content/uploads/2021/02/sach-suc-manh-cua-tinh-tam-207x300.png" alt="" className='w-[70px] h-[100px]' />
                </div>
                <div>
                    <h2 className='font-semibold'>The Armor of Light</h2>
                    <p className='text-gray-500 text-[15px]'>by Ken Follett</p>
                </div>

                <div className='font-bold text-[20px]'>
                    $10.09
                </div>
            </div>

            <div>
                <ButtonComponent handleColor className="w-[200px] mt-6" title={"save and continue"} />
            </div>
        </div>
    )
}

export default ProductOrderComponent