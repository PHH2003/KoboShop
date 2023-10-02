import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'

const AllReviewBook = () => {
    return (
        <div className='mt-16'>
            <div className='flex justify-between items-center my-5'>
                <div>
                    <h2 className='text-[16px] font-semibold text-gray-600 font-mono'>All Review Book</h2>
                </div>

                <div className='flex items-center'>
                    <div className='px-8'>
                        <select name="" id="" className='w-[180px] font-serif rounded-sm h-[30px] text-center bg-[#EDEDED]'>
                            <option value="0">filter by: All</option>
                            <option value="1">5 Statr</option>
                            <option value="2">4 Statr</option>
                            <option value="3">3 Statr</option>
                            <option value="4">2 Statr</option>
                            <option value="5">1 Statr</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='text-[16px] font-semibold text-gray-600 mb-2 text-center'>
                            Share your thoughts
                        </h2>

                        <ButtonComponent handleColor className="w-[170px] font-semibold" title={"write your review"} />
                    </div>


                </div>
            </div>
            <hr className='my-5' />
        </div>

    )
}

export default AllReviewBook