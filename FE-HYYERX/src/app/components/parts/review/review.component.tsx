import React from 'react'
import StarComponent from '../star/star.component'

const ReviewComponent = () => {
    return (
        <>
            <div className='flex justify-between mt-5'>
                <div className='w-[745px]'>
                    <div className='flex items-center'>
                        <div className='flex'>
                            <StarComponent />
                            <StarComponent />
                            <StarComponent />
                            <StarComponent />
                            <StarComponent />
                        </div>
                        <div className='px-5'>
                            <h2 className='font-semibold'>Riveting!</h2>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-600'>
                            I have read every book that Ms Roberts has written (this includes books by J. D. Robb)
                            and this is probably one of the best. It includes suspense, romance, and family ties. Morgan
                            and Miles were one of my favorite couples. They weren’t your typical sappy lovers but both had their heads on
                        </p>

                        <em className='text-[13px] font-semibold'>
                            by Ttutor on May 23, 2023
                        </em>

                    </div>
                </div>

                <div>
                    <em className='text-[15px] font-semibold text-gray-500'>5 of 6 people found this review helpful</em>
                </div>

            </div>
            <hr className='mt-4 ' />
        </>

    )
}

export default ReviewComponent